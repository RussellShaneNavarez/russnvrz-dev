import '../styles/Skills.css';

import { useState } from 'react';

import angular from '../assets/svg/angular.svg'
import typescript from '../assets/svg/typescript.svg'
import spring from '../assets/svg/spring.svg'
import java from '../assets/svg/java.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import git from '../assets/svg/git.svg'
import mysql from '../assets/svg/mysql.svg'
import docker from '../assets/svg/docker.svg'

import react from '../assets/svg/react.svg'
import javascript from '../assets/svg/javascript.svg'
import tailwind from '../assets/svg/tailwind-css.svg'
import firebase from '../assets/svg/firebase.svg'
import figma from '../assets/svg/figma.svg'
import nextjs from '../assets/svg/nextjs.svg'
import nodejs from '../assets/svg/nodejs.svg'

export const Skills = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
    return (
        <div class='skills w-full'>
            <div className='py-6 sm:py-12 md:py-16 px-8 sm:px-16 md:px-20 lg:px-32'>
                <h2 className='font-bold text-stone-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Current Technologies</h2>
                <p className='text-sm sm:text-sm md:text-md lg:text-lg text-stone-400 font-medium py-2'>I'm proficient in a range of modern technologies that empower me to build highly functional solutions. These are some of my main technologies.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 py-4 font-medium'>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={angular} alt="Angular" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Angular</h3>
                            <p className='text-stone-400'>TypeScript Framework</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={typescript} alt="TypeScript" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>TypeScript</h3>
                            <p className='text-stone-400'>Better JavaScript</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={spring} alt="Spring" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Spring</h3>
                            <p className='text-stone-400'>Java Framework</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={java} alt="Java" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Java</h3>
                            <p className='text-stone-400'>Backend Language</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={bootstrap} alt="Bootstrap" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Bootstrap</h3>
                            <p className='text-stone-400'>CSS framework</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={git} alt="Git" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Git</h3>
                            <p className='text-stone-400'>Version Control</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={mysql} alt="MySQL" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>MySQL</h3>
                            <p className='text-stone-400'>Relational Database</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={docker} alt="Angular" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Docker</h3>
                            <p className='text-stone-400'>Containerization Platform</p>
                        </div>
                    </div>
                </div>
                {isVisible && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 pb-4 font-medium'>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={react} alt="React" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>React</h3>
                            <p className='text-stone-400'>JavaScript Library</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={javascript} alt="JavaScript" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>JavaScript</h3>
                            <p className='text-stone-400'>Scripting Language</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={tailwind} alt="Tailwind" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Tailwind</h3>
                            <p className='text-stone-400'>CSS Framework</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={firebase} alt="Firebase" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Firebase</h3>
                            <p className='text-stone-400'>Backend Tool</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={figma} alt="Figma" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>Figma</h3>
                            <p className='text-stone-400'>Design Tool</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={nextjs} alt="NextJS" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>NextJS</h3>
                            <p className='text-stone-400'>React Framework</p>
                        </div>
                    </div>
                    <div className='tech'>
                        <div className='pr-[0.75rem]'>
                            <img src={nodejs} alt="NodeJS" width={50} />
                        </div>
                        <div>
                            <h3 className='text-stone-200'>NodeJS</h3>
                            <p className='text-stone-400'>Server-Side JavaScript</p>
                        </div>
                    </div>
                </div>
                )}

                <button onClick={toggleVisibility} className='text-stone-400 hover:text-stone-500 w-full font-medium'>
                    {isVisible ? 
                        <p>Hide ▲</p> : 
                        <p>In my personal projects, I also use... ▼</p>}
                </button>

            </div>
            
            
        </div>
    )
}