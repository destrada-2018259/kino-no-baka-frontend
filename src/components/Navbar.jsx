import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
<>
    <div className='sticky top-0 bg-[#fefbf7] z-50'>
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-[#f29b53]'>
        <NavLink to="/"><img className='md:size-36 size-24 hover:scale-105 hover:cursor-pointer duration-300' src={logo} alt="Logo" /></NavLink>
            <ul className='hidden md:flex text-xl font-bold font-principal'>
                <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/">Home</NavLink>
                <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/Portfolio">Portfolio</NavLink>
                <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/About">About</NavLink>
                <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/Contact">Contact</NavLink>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ffffff] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                <div className="flex justify-center items-center h-[20%]">
                    <img className='w-40' src={logo} alt="Logo" />
                </div>
                <ul className='p-4 text-2xl font-principal font-bold flex flex-col'>
                    <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/">Home</NavLink>
                    <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/Portfolio">Portfolio</NavLink>
                    <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/About">About</NavLink>
                    <NavLink className='px-4 py-2 cursor-pointer rounded-lg hover:bg-[#cb627f] hover:scale-110 hover:text-white duration-300' to="/Contact">Contact</NavLink>
                </ul>
            </div>
        </div>
    </div>
</>
    )
}