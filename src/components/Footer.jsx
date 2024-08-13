import React from 'react'
import logo from '../assets/logo.png'
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export const Footer = () => {
    return (
        <>
            <div className='bg-[#fefbf7] md:p-0 p-10'>

                <div className='flex md:justify-between items-center md:max-w-[1240px] mx-auto my-auto h-36 md:flex-row flex-col'>
                    <ul className='flex' >
                        <li className='px-4 hover:scale-125 cursor-pointer duration-300'> <a href="https://www.instagram.com/kinonobaka/" target='_blank'><FaInstagram className='text-[#f29b53]' size={40} /></a> </li>
                        <li className='px-4 hover:scale-125 cursor-pointer duration-300'> <a href="https://www.facebook.com/profile.php?id=100085135009694" target='_blank'><FaFacebook className='text-[#f29b53]' size={40} /></a> </li>
                        <li className='px-4 hover:scale-125 cursor-pointer duration-300'> <a href="https://x.com/kino19947493" target='_blank'><FaXTwitter className='text-[#f29b53]' size={40} /></a></li>
                    </ul>
                    <img src={logo} alt="Logo" className='w-48 hover:scale-125 duration-300 cursor-pointer' />
                    <h1 className='text-center font-principal text-[#f29b53] text-2xl'>
                        &copy;2024 KinoNoBaka
                    </h1>
                </div>
            </div>
        </>
    )
}
