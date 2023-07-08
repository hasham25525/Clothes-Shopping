import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import hero from '/public/hero-poster.webp'
import bustle from '/public/bustle.webp'



const Hero = () => {
    return (
        <section className='flex flex-col gap-y-6 lg:flex-row py-6  '>


            <div className='flex-1 transition ease-in-out delay-150'> {/* left div */}

                <Badge className='bg-blue-100 text-blue-800 rounded-lg text-lg px-6'>Sale 70%</Badge>
                <h1 className='mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                    An Industrial Take On Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    The king, seeing how much happier his subjects were, realized the error of
                    his ways and repealed the joke tax.
                </p>
                <Button className='bg-black text-gray-50 h-12 px-10 py-7 mt-3 '>  <ShoppingCart className='mr-3' /> Start Shopping</Button>
                <div className='flex justify-around mt-20'>
                    <Image src={bustle} alt='sponsers' />
                    <Image src={bustle} alt='sponsers' />
                    <Image src={bustle} alt='sponsers' />
                    <Image src={bustle} alt='sponsers' />
                </div>
            </div>


            <div className='flex-1 my-5 '> {/* right div */}
                <Image src={hero} alt='hero image' />
            </div>
        </section>
    )
}

export default Hero