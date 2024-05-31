import '../styles/WorkTogether.css'
import social1 from '../assets/svg/github.svg'
import social2 from '../assets/svg/linkedin.svg'
import social3 from '../assets/svg/instagram.svg'
import { useTranslation } from 'react-i18next';

export const WorkTogether = () => {
    const { t } = useTranslation();
    return (
        <>
            <div class='worktogether'>
                <h2>{t("worktog")}</h2>
                <p>{t("worktogtext")}</p>
                <div class='flex flex-wrap justify-evenly worktog items-center social-cont'>
                    <a href="https://github.com/RussellShaneNavarez/RussellShaneNavarez">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social1} alt="GitHub"/>
                            <p class='font-medium underline-hover'>GitHub</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/russell-shane-navarez/">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social2} alt="LinkedIn" />
                            <p class='font-medium  underline-hover'>LinkedIn</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/russnvrz/">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social3} alt="Instagram" />
                            <p class='font-medium underline-hover'>Instagram</p>
                        </div>
                    </a>
                    
                </div>
            </div>
        </>
    )
}