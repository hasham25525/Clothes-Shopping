import React from 'react'
import { Products } from '@/utils/mock'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Quantity from '@/components/Quantity'
import AddToCart from '@/components/AddToCart'

const getProductByDetail = (id: number | string) => {
    return Products.filter((product) => product.id == id)
}

export default function Page({ params }: { params: { id: string } }) {
    const result = getProductByDetail(params.id);
    return (

        <div className='flex flex-wrap py-10 mt-16 gap-6 lg:justify-center'>
            {
                result.map((product) => (
                    <div key={product.id} className='flex flex-col gap-y-6 lg:flex-row py-6 ' >
                        <div className='flex'>
                            {/* <Image src={product.image} alt={product.name}  className='scale-50 flex justify-start items-start'/> */}

                            <Image src={product.image} alt={product.name} />
                        </div>
                        <div className='lg:px-10 lg:mt-16 '>
                            <div className=''>

                                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                                    {product.name}</h2>

                                <p className=' font-semibold text-gray-400'> {product.category}</p>

                                <p className='mt-6 text-sm font-bold font-sans' >SELECT SIZE</p>
                                <div className='flex h-12'>
                                    <Button variant="ghost">XS</Button>
                                    <Button variant="ghost">S</Button>
                                    <Button variant="ghost">M</Button>
                                    <Button variant="ghost">L</Button>
                                    <Button variant="ghost">XL</Button>

                                </div>
                                <div className='flex items-center S'>
                                    <h2 className="scroll-m-20 text-md font-semibold tracking-tight transition-colors mt-4">
                                        Quantity</h2>
                                    <Quantity/>
                                </div>
                            </div>
                            <div className='flex items-center mt-4'>
                                {/* <Button variant="default">Add To Cart</Button> */}
                                <AddToCart/>

                                <p className='mx-3 text-xl font-bold font-sans'>Price: ${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div>
    )
} 