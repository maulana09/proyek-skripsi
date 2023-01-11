import React from 'react'
import icon0 from '../assets/js.png'
import icon1 from '../assets/kurikulum.svg'
import icon2 from '../assets/materi.svg'
import icon3 from '../assets/info.svg'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="min-h-[83vh]">
        <div className="rounded-div">
          <div className="hero-content text-center">
            <div className="max-w-md">              
              <p className="py-4 text-xl">Media Pembelajaran Interaktif</p>
              <h1 className="text-5xl text-primary font-bold pb-6">JavaScript Dasar</h1>
              <img src={icon0} alt="JavaScript" className="py-3 ml-32 w-1/4 " />
            </div>
                
          </div>
        </div>
        <div className="rounded-div flex w-full justify-between gap-12 h-60">
          <Link to='/kurikulum' className="card w-1/3 bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={icon1} alt="Kurikulum" className="rounded-xl object-fill" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Kurikulum</h2>
            </div>
          </Link>
          <Link to='/materi' className="card w-1/3 bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={icon2} alt="Materi" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Materi</h2>
            </div>
          </Link>
          <Link to='/info' className="card w-1/3 bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-300">
            <figure className="px-10 pt-10">
              <img src={icon3} alt="Info" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Info</h2>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}
