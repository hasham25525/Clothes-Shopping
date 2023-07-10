import React from 'react'
import logo from '/public/logo.webp'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (

    <div className="flex justify-between items-center py-6 px-8">
      <Link href="/"><Image src={logo} alt="logo" className="w-40" /></Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href="/category/Female">
            Female
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/category/Male">
            Male
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/category/Kids">
            Kids
          </Link>
        </li>
        <li className="text-lg">
          <Link href="/products">
            All Products
          </Link>
        </li>
      </ul>
      <div className="h-8 w-8 rounded-full bg-gray-200 flex justify-center items-center" >
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  )
}

export default Header