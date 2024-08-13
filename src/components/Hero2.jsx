import React from 'react'
import { Separator } from './Separator'
import { PinkSeparator } from './PinkSeparator'

export const Hero2 = () => {
  return (
    <>
    <div className='bg-[#F3DEC8]'>
    <PinkSeparator/>

    <div className=' max-w-[1240px] md:h-[calc(100vh-80px)] mx-auto grid md:grid-cols-2 text-center'>

    <div className='w-full  flex flex-col p-4  text-center justify-center'>
        <img className='size-auto hover:scale-105 hover:drop-shadow-2xl duration-300 ' src="" alt="" />
    </div>

    <div className='w-full  flex flex-col p-4 text-center justify-center'>

        <div className='text-[#cc647e] flex justify-center items-center'>
            <p className='md:text-6xl sm:text=4xl text-6xl font-principal'>Hi! I'm Kino</p>
        </div>
        <p className='md:text-2xl text-2xl font-principal font-medium text-[#cf7e87] mt-2'>Artist</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam perferendis fuga accusamus dolores error at eaque esse molestias asperiores tempore, illo maxime repellat praesentium quas et, ea odio, reprehenderit sunt.
        Laudantium alias, provident temporibus sint aspernatur repellat deserunt tempora animi doloribus hic numquam recusandae itaque eius, totam non libero quae atque maiores nobis eveniet accusamus iste. Placeat a doloremque qui!</p>

    </div>
    </div>
    <Separator/>
    </div>

    </>
  )
}
