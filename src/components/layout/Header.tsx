'use client'

import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react';
import { useSelector } from 'react-redux/'
import { RootState } from '@/store/store'


const Header = () => {

  const cartValue = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
 
    <nav className="flex justify-between items-center py-6 px-8 bg-black" >

      <input type="checkbox" id='check' />
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
      <div className="h-8 w-8 rounded-full bg-gray-950 flex justify-center items-center relative x`" >
        <span className='absolute right-1 top-0 rounded-full h-3 w-3 bg-red-600 text-white text-xs flex justify-center items-center z-10'> 
        {cartValue}
        </span>
        <ShoppingCart className="h-6 w-6 text-white" />
      </div>
    </nav>
  )
}

export default Header