import React from 'react'
import p1 from '/public/prod1.png'
import Image,{StaticImageData} from 'next/image'

const ProductCard = (props:{title:string, price:number, img:StaticImageData}) => {
    return (

        <div className='flex-1 transition ease-in-out delay-150 hover:scale-105'>
            <Image src={props.img} height={400} alt="product" />
            <h3 className='font-bold text-lg mt-5'>{props.title}</h3>
            <p className='font-bold text-lg '>${props.price}</p>
        </div>
    )
}

export default ProductCard