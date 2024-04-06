import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { AuthService } from './appwrite/auth'
import { login, logout} from './store/authSlice'
import {Footer, Header} from './components/index'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const authService = new AuthService()
    authService.GetCurrentUser()
    .then((userData)=>{
      if(userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))

  }, [])

  return !loading ? (
    <>
      <div className='w-auto h-auto'>
        <div className='text-center'>
          <Header/>
          <main>
           <Outlet/>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  ): null
}

export default App
