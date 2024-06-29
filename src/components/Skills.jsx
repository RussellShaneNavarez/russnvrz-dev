import '../styles/Skills.css';
import bootstrap from '../assets/svg/bootstrap.svg'
import css from '../assets/svg/css.svg'
import figma from '../assets/svg/figma.svg'
import firebase from '../assets/svg/firebase.svg'
import html from '../assets/svg/html.svg'
import java from '../assets/svg/java.svg'
import javascript from '../assets/svg/javascript.svg'
import linux from '../assets/svg/linux.svg'
import mysql from '../assets/svg/mysql.svg'
import react from '../assets/svg/react.svg'
import spring from '../assets/svg/spring.svg'
import tailwind from '../assets/svg/tailwind-css.svg'
import nextjs from '../assets/svg/nextjs.svg'
import typescript from '../assets/svg/typescript-icon.svg'
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();
    return (
        <div class='skills'>
            <h2>{t("skills")}</h2>
            <p>{t("skilltext")}</p>
            <div className='skill-icons flex flex-wrap justify-center items-center'>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={javascript} alt="Skill" />
                    <p class='font-bold'>Javascript</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={react} alt="Skill" />
                    <p class='font-bold'>React</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={nextjs} alt="Skill" />
                    <p class='font-bold'>Next.js</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={typescript} alt="Skill" />
                    <p class='font-bold'>Typescript</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={java} alt="Skill" />
                    <p class='font-bold'>Java</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={spring} alt="Skill" />
                    <p class='font-bold'>Spring</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={tailwind} alt="Skill" />
                    <p class='font-bold'>Tailwind</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={bootstrap} alt="Skill" />
                    <p class='font-bold'>Bootstrap</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={firebase} alt="Skill" />
                    <p class='font-bold'>Firebase</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={mysql} alt="Skill" />
                    <p class='font-bold'>MySQL</p>
                </div>
                
                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={html} alt="Skill" />
                    <p class='font-bold'>HTML</p>
                </div>

                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={css} alt="Skill" />
                    <p class='font-bold'>CSS</p>
                </div>
               
                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={figma} alt="Skill" />
                    <p class='font-bold'>Figma</p>
                </div>
                
                <div class='skill transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={linux} alt="Skill" />
                    <p class='font-bold'>Linux</p>
                </div>
                               
            </div>
            <div className='see-more'>
                <a href="https://github.com/RussellShaneNavarez">
                    <button class="font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">{t("skillbtn")}</button>
                </a>
            </div>
        </div>
    )
}