import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases ;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredimage, status , userId}) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
                
                )
            } catch (error) {
            console.log(title, slug, content, featuredimage, status , userId)
            console.log("Appwrite Error  :: createPost ::", error.message);
        }
    }

    async updatePost( slug, {title, content, featuredimage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId, // Updated appwrite DatabaseId
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                }

            )
            
        } catch (error) {
            console.log("Appwrite Error  :: updatePost ::", error.message);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId, // Updated appwrite DatabaseId
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite Error  :: deletePost ::", error.message);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId, // Updated appwrite DatabaseId
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Error  :: getPost ::", error.message);
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId, // Updated appwrite DatabaseId
                config.appwriteCollectionId,
                // queries,  //chech this later
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    //file upload service

    async uploadFile(file){ 
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite Error  :: uploadFile ::", error.message);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
               config.appwriteBucketId,
                fileId
                )
                return true;
                
                
            } catch (error) {
            console.log("Appwrite Error :: deleteFile ::", error.message);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId,
         );

    }
}


const services = new Service();
export default services;
