
import config from "../conf/config";
import { Client , Account, ID } from "appwrite";

/**
 * Represents an authentication service.
 */
export class AuthService {
    client = new Client();
    account;

    /**
     * Constructs a new instance of the AuthService class.
     */
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client); 
    }

    /**
     * Registers a new user.
     * @param {string} email The email of the user.
     * @param {string} password The password of the user.
     * @returns {Promise} A promise that resolves when the user is registered.
    **/

    async  createAccount({email, password , name}) {
        try {
          const userAccount =  await this.account.create(ID.unique(), email, password, name);

          if(userAccount) {
              // call Another method 
              return this.login({email, password});              
            } 
          else {
              return userAccount;
          }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login({email, password}) {
        try {
            await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async GetCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions();
            
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

}

const authservice = new AuthService();


export default authservice;
 
