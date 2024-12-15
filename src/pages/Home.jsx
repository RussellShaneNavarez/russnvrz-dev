import React, { useRef } from "react";
import { Projects } from '../components/Projects';
import { Bio } from '../components/Bio';
import { Skills } from '../components/Skills';
import { Experiences } from '../components/Experiences';
import { WorkTogether } from '../components/WorkTogether';
import { Footer } from '../components/Footer';
import { Language } from '../components/Language';
import '../styles/Home.css'

export const Home = () => {

const projectsRef = useRef(null);
const cv = '/files/cv_navarez.pdf'; //TEMPORARY CV

const openPdf = () => {
    window.open(cv, '_blank');
};

const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
};

    return (
        <>
        <div class="bg text-white w-full">
                <div className='w-full flex flex-col justify-center items-center'>
                    <p className='text-md font-bold text-stone-200'>BASED IN ITALY</p>
                    <div className='md:w-[60%] w-[85%] flex justify-center items-center flex-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:gap-[1rem] gap-[0.75rem] pt-3 pb-[2rem] font-bold'>
                        <p>Quality </p>
                        <p className='text-primary'>Design</p>
                        <p className='text-primary'>&</p>
                        <p className='text-primary'>Web</p>
                        <p className='text-primary'>Development</p>
                        <p>Synergy</p>
                    </div>
                    <div className='md:w-[65%] w-[90%]'>
                        <p className='text-md text-stone-400 font-normal text-center'>Hi, I'm Russell, I create intuitive, visually stunning and highly functional web applications.</p>
                    </div>
                    <div className='flex p-4 gap-3'>
                        <button className='flex see-my-work-btn gap-[0.25rem]' onClick={scrollToProjects}>
                            <p>See My Work</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                        </button>
                        <button className='flex items-center gap-[0.75rem]' onClick={openPdf}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download text-primary"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                            <p className="hover:text-stone-400">Download CV</p>
                        </button>
                    </div>
                </div>
            
        </div>
        <Skills></Skills>
        <div ref={projectsRef}>
        <Projects />
      </div>
        <Bio></Bio>
        <Experiences></Experiences>
        <WorkTogether></WorkTogether>
        <Footer></Footer>
        <Language></Language>
        </>
    )
}