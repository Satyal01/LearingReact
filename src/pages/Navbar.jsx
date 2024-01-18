import React from 'react'
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
      <nav className='flex justify-between py-2 px-20 my-1 items-center '>
            <div className=' w-fit'>
                <img src="./brand_logo.png" alt="logo" />
            </div>
            <div className='flex gap-6 text-sm font-bold uppercase font-["poppins"]'>
                <Link to="">Menu</Link>
                <Link to="">Location</Link>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
            </div>
            <div className='bg-red-500 px-1 '>
                <button className='text-white font-mono'>Login</button>
            </div>
        </nav>
  )
}

export default Navbar
