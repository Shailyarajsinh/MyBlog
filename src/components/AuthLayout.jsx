import React ,{useEffect,useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Peotected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
           navigate('/login')
        }else if(!authentication && authStatus !== authentication){
            navigate('/')
            
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return  loader ? <div>Loading...</div> : <>{children}</> 
}

