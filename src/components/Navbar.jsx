import React from 'react'
import { Link } from 'react-router-dom'
import { HiCode } from 'react-icons/hi'

export const Navbar = () => {
  
  return (
    <div className='relative rounded-div flex items-center justify-between border-solid border-amber-400 h-20 font-bold'>
      <Link to='/'>
        <h1 className='text-2xl'>
        <HiCode className='inline text-primary text-4xl mr-2'/>Kelas Web</h1>
      </Link>
      <div className='flex justify-between gap-2'>
      <Link to='/signin' className="btn btn-ghost">Login</Link>
      <Link to='/signup' className="btn btn-warning">Daftar</Link>
      </div>

    </div>
  )
}
