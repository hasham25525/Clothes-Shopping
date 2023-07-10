import React from 'react'
import { Products } from '@/utils/mock'
import ProductCard from '@/components/ProductCard'

const getProductByCategory = (category: string) => {
    Products.filter((product) => product.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug);
    return(
        <div className='flex justify-evenly py-10  flex-wrap'>
        {
            result.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    img={product.image}
                    category={product.category} />
            ))
        }
    </div> 
    )
} 