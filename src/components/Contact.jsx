import React, { useState } from 'react'
import { Separator } from './Separator'
import { contactApi } from '../api/contactApi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (!name || !email || !message) {
            toast.error('All inputs are required.', { position: 'bottom-right' });
            return;
        }
        if (!validateEmail(email)) {
            toast.error('Please, use a valid email.', { position: 'bottom-right' });
            return;
        }

        try {
            await contactApi(name, email, message);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            toast.error('Error sending message.', { position: 'bottom-right' });
        }
    };

    return (
        
        <div
            className="bg-[length:100px_100px] bg-repeat"
            style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%27%20height=%27100%27%20viewBox=%270%200%20100%20100%27%3E%3Crect%20fill=%27%23ffd2dd%27%20width=%27100%27%20height=%27100%27/%3E%3Cg%20%20stroke=%27%23CCC%27%20stroke-width=%270%27%20stroke-opacity=%271%27%3E%3Crect%20fill=%27%23FDFBF9%27%20x=%27-60%27%20y=%27-60%27%20width=%27110%27%20height=%27240%27/%3E%3C/g%3E%3C/svg%3E')",
            }}
        >
            
            <form onSubmit={handleSubmit} className="max-w-[1240px] md:h-[calc(100vh-80px)] mx-auto grid md:grid-cols-2 text-center font-principal">
                <div className="w-full flex flex-col p-4 order-2 md:order-1 text-left justify-center">
                    <div className="mb-6">
                        <label htmlFor="name-input" className="block mb-2 text-2xl font-medium text-black">Name</label>
                        <input
                            type="text"
                            id="name-input"
                            className="block w-full p-4 text-gray-900 border border-black rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email-input" className="block mb-2 text-2xl font-medium text-black">Email</label>
                        <input
                            type="email"
                            id="email-input"
                            className="block w-full p-4 text-gray-900 border border-black rounded-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message-input" className="block mb-2 text-2xl font-medium text-black">Message</label>
                        <textarea
                            id="message-input"
                            className="block w-full p-4 text-gray-900 border border-black rounded-lg h-40"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className='bg-[#cc6380] p-3 rounded-3xl text-white font-principal text-4xl hover:scale-105 duration-300 hover:bg-[#c44267] md:mb-0 mb-18'
                    >
                        Send!
                    </button>
                </div>

                <div className="w-full flex flex-col p-4 text-center justify-center  order-1 md:order-2" >
                    <div className="text-[#cc647e] flex justify-center items-center">
                        <p className="md:text-8xl sm:text-6xl text-6xl font-principal text-[#cc647e] relative" style={{
                            textShadow: `-4px -4px 0 white, 4px -4px 0 white, -4px 4px 0 white, 4px 4px 0 white`
                        }}>
                            Contact me!
                        </p>
                    </div>
                </div>
            </form>
            <Separator />
        </div>
    )
}