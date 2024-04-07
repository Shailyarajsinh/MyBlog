import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then( () =>{
            dispatch(logout())
        })
        dispatch(logout())
    }
  return (
   <button 
    onClick={logoutHandler} 
    className="inline-block px-6 py-2 duration-200 hover:bg-blue-50-100 rounded-full font-semibold"
    >Logout
   </button>
  )
}

export default LogoutBtn