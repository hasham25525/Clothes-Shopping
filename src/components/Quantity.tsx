"use client"
import React,{useState} from 'react'

const Quantity = () => {
    const [num, setNum] = useState(1);
    return (
        <>
            <div className='flex ml-3 mt-3 gap-4'>
                <button className='w-6 h-6 border rounded-full flex justify-center items-center hover:' onClick={()=>{
                    setNum(num-1);
                }}>
                    -
                </button>
               <span>{num}</span>
                <button className='w-6 h-6 border rounded-full flex justify-center items-center' onClick={()=>{
                    setNum(num+1);
                }}>
                    +
                </button>
            </div>
        </>
    )
}

export default Quantity