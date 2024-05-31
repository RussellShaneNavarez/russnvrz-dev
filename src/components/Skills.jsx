import '../styles/Skills.css';
import androidstudio from '../assets/svg/android-studio.svg'
import angular from '../assets/svg/angular.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import css from '../assets/svg/css.svg'
import figma from '../assets/svg/figma.svg'
import firebase from '../assets/svg/firebase.svg'
import html from '../assets/svg/html.svg'
import java from '../assets/svg/java.svg'
import javascript from '../assets/svg/javascript.svg'
import linux from '../assets/svg/linux.svg'
import mysql from '../assets/svg/mysql.svg'
import docker from '../assets/svg/docker.svg'
import python from '../assets/svg/python.svg'
import react from '../assets/svg/react.svg'
import spring from '../assets/svg/spring.svg'
import swift from '../assets/svg/swift.svg'
import tailwind from '../assets/svg/tailwind-css.svg'
import vue from '../assets/svg/vue.svg'
import { useTranslation } from 'react-i18next';

export const Skills = () => {
    const { t } = useTranslation();
    return (
        <div class='container skills'>
            <h2 className="text-7xl">{t("skills")}</h2>
            <p class='text-xl py-3 '>{t("skilltext")}</p>
            <div className='skill-icons flex flex-wrap justify-center items-center gap-4 py-3 px-5 '>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={html} alt="Skill" />
                    <p class='font-bold'>HTML</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={css} alt="Skill" />
                    <p class='font-bold'>CSS</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={javascript} alt="Skill" />
                    <p class='font-bold'>Javascript</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={bootstrap} alt="Skill" />
                    <p class='font-bold'>Bootstrap</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={tailwind} alt="Skill" />
                    <p class='font-bold'>Tailwind</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={react} alt="Skill" />
                    <p class='font-bold'>React</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={vue} alt="Skill" />
                    <p class='font-bold'>Vue</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={angular} alt="Skill" />
                    <p class='font-bold'>Angular</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={spring} alt="Skill" />
                    <p class='font-bold'>Spring</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={java} alt="Skill" />
                    <p class='font-bold'>Java</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={python} alt="Skill" />
                    <p class='font-bold'>Python</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={linux} alt="Skill" />
                    <p class='font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Linux</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={swift} alt="Skill" />
                    <p class='font-bold'>Swift</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={androidstudio} alt="Skill" />
                    <p class='font-bold'>Android</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={firebase} alt="Skill" />
                    <p class='font-bold'>Firebase</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={mysql} alt="Skill" />
                    <p class='font-bold'>MySQL</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={figma} alt="Skill" />
                    <p class='font-bold'>Figma</p>
                </div>
                <div class='skill p-3 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                    <img src={docker} alt="Skill" />
                    <p class='font-bold'>Docker</p>
                </div>
            </div>
            <div className='see-more p-6 '>
                <a href="https://github.com/RussellShaneNavarez">
                    <button class="p-2 font-semibold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">{t("skillbtn")}</button>
                </a>
            </div>
        </div>
    )
}