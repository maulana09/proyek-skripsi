import React from 'react'
import { Link } from 'react-router-dom'
import gambar1 from '../assets/jsdihead.png'


export const Materi = () => {
  return (
    <>
      <div className='relative'>
        <div className='fixed top-0 left-0 right-0'>
          <div className='rounded-div shadow-xl bg-primary flex items-center h-20 gap-6 font-bold z-10'>
            <Link to='/'>
              <h1 className='text-2xl'>JavaScript Dasar</h1>
            </Link>
            <div className=''>
              <button className="text-xs px-4 outline outline-1 w-70 breadcrumbs btn-outline btn-warning rounded-full">
              <ul>
                <li>Menyisipkan JavaScript</li> 
                <li>Internal JavaScript</li>
              </ul>
            </button>
            </div>
            
            <progress className="outline outline-1 outline-warning progress progress-warning w-56" value="10" max="100"></progress>
            <p className='text-sm place items-end'>4/40 Latihan sudah diselesaikan</p>
          </div>
        </div>
      </div>
      <div className=''>
        <div className='rounded-div bg-[#1F1B24] outline outline-warning my-24 pt-2 z-0'>
          <div className='flex pt-0 '>
            <div className='w-full'>
              <p className='text-2xl font-bold pb-2'>📝 Internal JavaScript</p>
              <hr className='pb-6'/>
              <div className='pl-8'>
              <p>Sebelum mulai masuk mempelajari JavaScript lebih dalam, ada baiknya kita mempelajari dahulu bagaimana cara menyisipkan JavaScript di dalam HTML. Hal ini ditujukan agar kode JavaScript kita bisa dibaca oleh browser, dan bisa berinteraksi dengan kode HTML kita.</p>
              <p>Ada dua cara, yaitu:</p>
              <ul className='list-disc leading-normal pl-8'>
                <li>Internal JavaScript, yaitu menyisipkan kode JavaScript langsung di dalam file HTML.</li>
                <li>External JavaScript, yaitu membuat file JavaScript sendiri dan menyambungkannya dengan file HTML.</li>
              </ul>
              <h2 className='text-2xl pt-3 font-bold'>Internal JavaScript</h2>
              <p className='leading-normal'>Untuk menyisipkan kode JavaScript di dalam file HTML, kita bisa menuliskan kode JavaScript di dalam tag . Tag <code>&lt;script&gt;</code> sendiri bisa ditulis di dalam <code>&lt;head&gt;</code> maupun di dalam bagian akhir dari <code>&lt;body&gt;</code></p>
              <figure className="carousel rounded-box justify-center my-7">
                  <img src={gambar1} alt="Burger" />
              </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
