import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/kurikulum.svg'


export const Kurikulum = () => {
  return (
    <>
      <div className='relative'>
        <div className='fixed top-0 left-0 right-0'>
          <div className='rounded-div flex items-center h-20 gap-4 font-bold'>
          <Link to='/'>
            <h1 className='text-2xl'>JavaScript Dasar</h1>
          </Link>
          <button className="btn btn-outline btn-warning rounded-full">Silabus</button>
          </div>
        </div>
      </div>
      
        <div className='rounded-div my-12 pt-12'>
          <div className='flex pt-0 '>
            <div className='w-full'>
              <p className='text-2xl font-bold pb-2'>📝 Apa yang Akan Kita Pelajari?</p>
              <hr className='pb-6'/>
              <div className='grid md:grid-cols-2 gap-y-3 gap-x-0'>
                <div className='pl-8'>
                  <ul class="list-disc leading-normal">
                    <li>Menyisipkan JavaScript di dalam HTML</li>
                    <li>Tipe Data dan Variabel JavaScript</li>
                    <li>Operator JavaScript</li>
                    <li>Fungsi (Function) JavaScript</li>
                    <li>Array JavaScript</li>
                    <li>Objek JavaScript</li>
                    <li>Objek-objek Built-in</li>
                    <li>Percabangan JavaScript</li>
                    <li>Perulangan JavaScript</li>
                    <li>JavaScript DOM</li>
                  </ul>
                </div>
              <img src={icon1} alt="Kurikulum"  className='w-[318px]'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
