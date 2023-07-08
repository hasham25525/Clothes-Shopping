import React from 'react'
import { Products } from '@/utils/mock'
import ProductCard from '@/components/ProductCard'

const getProductByCategory=(category:string)=>{
    Products.filter((product)=>product.category===category)
}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Category: {params.slug}</div>
  } 