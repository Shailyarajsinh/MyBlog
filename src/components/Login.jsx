import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError('')
        try {
            const session = await authservice.login(data)
            if (session) {
                const userData = await authservice.GetCurrentUser()
                if (userData) dispatch(authLogin(userData))             
        }
        navigate('/')
        window.location.reload()
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
        className='flex items justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
                <div className='mb-4 flex justify-center'>
                    <span className='inline-block p-3 max-w-[100px] w-full'>
                        <Logo width='100%' />
                    </span>
                </div>
                <h2 className='text-2xl font-bold text-center leading-tight'>Sign in to your account</h2>
                <p className='mt-2 text-center text-base text-black/60'>
                    Don't have an account? 
                    <Link to='/signup' className='font-medium text-blue-400 transition-all duration-200 hover:underline'>Signup</Link>
                </p>
                {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5 p-3'>
                        <Input 
                        type='email' 
                        label='Email' 
                        placeholder='Enter your email'   
                        {...register('email', { required: true,
                        validate:{
                            matchPattern: (value) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
                            || 'Email is not valid',
                        }
                    })}
                        />
                        <Input
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        {...register('password', { required: true })}
                        />
                        <Button
                        type='submit'
                        className='w-full p-2'                      
                        >Sign in</Button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login