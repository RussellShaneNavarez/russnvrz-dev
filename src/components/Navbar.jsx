import { useState, useEffect } from 'react';

import '../styles/Navbar.css'

export const Navbar = () => {
    const [isBlurred, setIsBlurred] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsBlurred(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
       
            <nav className={`navbar ${isBlurred ? 'backdrop-blur-sm' : ''}`}>
            <div className=" md:flex space-x-4">
                <a href="#home" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#services" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#contact" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
                Hi
            </nav>
          
        </>
    )
}