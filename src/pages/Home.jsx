import { useState, useEffect} from 'react';
import { Projects } from '../components/Projects';
import { Bio } from '../components/Bio';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';
import { WorkTogether } from '../components/WorkTogether';
import '../styles/Home.css'

export const Home = () => {
    const objects = ["Full Stack Developer", "Software Architect", "Photographer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 2.5); // Delay for 0.5 seconds

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % objects.length);
        }, 5000); // Change every 5 seconds

        // Clean up the interval and timeout on component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [objects.length]);

    return (
        <>
        
        <div class="bg text-lg font-bold text-white">
                <div className={`name transform transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <h1>Hi. I'm Russell.</h1>
                    <h2>{objects[currentIndex]}.</h2>
                </div>
            
        </div>
        <Projects></Projects>
        <Bio></Bio>
        <Skills></Skills>
        <Experiences></Experiences>
        <WorkTogether></WorkTogether>
        </>
    )
}