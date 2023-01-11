import React from 'react'
import { Link } from 'react-router-dom'

export const Navigasi = () => {
  
  return (
    <div className='rounded-div flex items-center h-20 font-bold'>
      <Link to='/'>
        <h1 className='text-2xl'>JavaScript Dasar</h1>
      </Link>
    </div>
  )
}
