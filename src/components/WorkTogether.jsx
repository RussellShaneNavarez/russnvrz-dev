import '../styles/WorkTogether.css'
import social1 from '../assets/svg/github.svg'
import social2 from '../assets/svg/linkedin.svg'
import social3 from '../assets/svg/instagram.svg'
import { useTranslation } from 'react-i18next';

export const WorkTogether = () => {
    const { t } = useTranslation();
    return (
        <>
            <div class='container worktogether'>
                <h2 className="text-7xl px-28">{t("worktog")}</h2>
                <p class='text-xl py-3 px-28 '>{t("worktogtext")}</p>
                <div class='flex flex-wrap justify-evenly items-center px-10 social-cont'>
                    <a href="https://github.com/RussellShaneNavarez/RussellShaneNavarez">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social1} alt="GitHub"/>
                            <p class='text-3xl font-medium p-2 underline-hover'>GitHub</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/russell-shane-navarez/">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social2} alt="LinkedIn" />
                            <p class='text-3xl font-medium p-2 underline-hover'>LinkedIn</p>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/russnvrz/">
                        <div className='social flex flex-col justify-center items-center text-center transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img src={social3} alt="Instagram" />
                            <p class='text-3xl font-medium p-2 underline-hover'>Instagram</p>
                        </div>
                    </a>
                    
                </div>
            </div>
        </>
    )
}