import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react';


const Header = () => {
  return (

    <div className="flex justify-between items-center py-6 px-8 bg-black" >

      <input type="checkbox" id='check'/>
      <label htmlFor="check" className='checkbtn'>
        <Menu className=' h-8 w-8 text-white' />
      </label>

      <Link href="/"><Image src={logo} alt="logo" className="w-40 invert" /></Link>
      <ul className=" links ">
        <li className="text-lg nav_links text-white">
          <Link href="/category/Female">
            Female
          </Link>
        </li>
        <li className="text-lg nav_links text-white">
          <Link href="/category/Male">
            Male
          </Link>
        </li>
        <li className="text-lg nav_links text-white">
          <Link href="/category/Kids">
            Kids
          </Link>
        </li>
        <li className="text-lg nav_links text-white">
          <Link href="/products">
            All Products
          </Link>
        </li>
      </ul>
      <div className="h-8 w-8 rounded-full bg-gray-950 flex justify-center items-center" >
        <ShoppingCart className="h-6 w-6 text-white" />
      </div>
    </div>
  )
}

export default Header