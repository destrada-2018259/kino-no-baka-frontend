import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/logo.png'

export const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black font-'>
            <img className='md:size-44 size-36 hover:scale-105 hover:cursor-pointer duration-300' src={logo} alt="Logo" />
            <ul className='hidden md:flex text-2xl font-bold font-principal' >
                <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Home</li>
                <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Portfolio</li>
                <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>About</li>
                <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <div className="flex justify-center items-center h-[20%]"> 
                    <img className='w-40' src={logo} alt="Logo" /> 
                </div>
                <ul className='p-4 text-2xl font-principal font-bold'>
                    <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Home</li>
                    <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Portfolio</li>
                    <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>About</li>
                    <li className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300'>Contact</li>
                </ul>
            </div>
        </div>
    )
}