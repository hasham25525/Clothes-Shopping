import React from 'react'
import { Products } from '@/utils/mock'

import ProductCard from '@/components/ProductCard'


const ProductList = () => {

    const prodChunks= Products.slice(0,3)
    
    return (
        <>
            <div >
                <p className='flex justify-center text-blue-800 font-extrabold'>PRODUCTS</p>
            <h2 className=" flex justify-center scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Check What We Have
            </h2>
            </div>
            <section className='flex justify-evenly gap-y-6 lg:flex-row py-6 '>
                {
                    prodChunks?.map((product)=>(
                         <ProductCard key={product.id} title={product.name} price={product.price} img={product.image} category={product.category} id={product.id} />
                    ))
                }
            </section>
        </>
    )
}

export default ProductList