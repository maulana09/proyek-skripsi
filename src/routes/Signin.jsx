import React from 'react'
import { AiFillLock, AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Signin = () => {
  return (
    <>
      <Navbar/>
      <div>
        <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20 bg-secondary'>
          <h1 className='text-2xl font-bold'>Login</h1>
          <form>
            <div className='my-4'>
              <label>Email</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type='email'
                />
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400' />
              </div>
            </div>
            <div className='my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                <input
                  className='w-full p-2 bg-primary border border-input rounded-2xl'
                  type='password'
                />
                <AiFillLock className='absolute right-2 top-3 text-gray-400' />
              </div>
            </div>
            <button className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>
              Masuk
            </button>
          </form>
          <p className='my-4'>
            Belum punya akun?{' '}
            <Link to='/signup' className='text-accent'>
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}