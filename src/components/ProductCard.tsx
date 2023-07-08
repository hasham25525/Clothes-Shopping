import React from 'react'
import p1 from '/public/prod1.png'
import Image,{StaticImageData} from 'next/image'
import { Button } from "@/components/ui/button"


const ProductCard = (props:{title:string, price:number, img:StaticImageData, category:string}) => {
    return (

        <div className='flex-1 transition ease-in-out p-3 hover:scale-105 hover:shadow-md'>
            <Image src={props.img} height={400} alt="product" />
            <h3 className='font-bold text-lg mt-5'>{props.title}</h3>
            <p className='font-bold text-lg '>${props.price}</p>
            <p className='font-light text-lg '>{props.category}</p>
            <Button variant="secondary">Add to Cart</Button>

        </div>
    )
}

export default ProductCard