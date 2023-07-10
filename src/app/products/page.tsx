import ProductCard from '@/components/ProductCard'
import { Products } from '@/utils/mock'
import React from 'react'

const page = () => {


  return (
    <div className='flex justify-evenly py-10 flex-wrap'>
      {
        Products.map((product) => (
          <ProductCard key={product.id} title={product.name} price={product.price} img={product.image} category={product.category } id={product.id} />
        ))
      }
    </div>
  )
}

export default page