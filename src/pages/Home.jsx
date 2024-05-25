import { useState, useEffect} from 'react'

import { Navbar } from '../components/Navbar';

import '../styles/Home.css'

export const Home = () => {
    const objects = ["Full Stack Developer", "Software Architect", "Photographer"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % objects.length);
        }, 5000); // Change every 5 seconds

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [objects.length]);
    return (
        <>
        <Navbar></Navbar>
        <div class="bg text-lg font-bold text-white">
            <div className='name'>
                <h1>Hi. I'm Russell.</h1>
                <h2>{objects[currentIndex]}</h2>
            </div>
            
        </div>


        <div className='container'>
           <p>Roboto</p>
           <p>Roboto</p>
           <p>Roboto</p>
           <p>Roboto</p>
           <p>Roboto</p>
           <p>Roboto</p>
           <p>Roboto</p>
        </div>
        
        
        </>
    )
}