import '../styles/Projects.css'
import image1 from '../assets/images/portfolio.jpg';
import image2 from '../assets/images/rsnweather.jpg'; 
import image3 from '../assets/images/lazadarsn.jpg';
import image4 from '../assets/images/russcalculus.jpg';
import { useTranslation } from 'react-i18next';

export const Projects = () => {
  const { t } = useTranslation();
    return (
        <>
          <div className="container projects">
            <h2 className="text-7xl px-28">{t("projects")}</h2>

            <div className="flex flex-wrap items-center justify-center py-12 px-20 gap-16">
              <p className="text-9xl">&lt;&lt;</p>

              <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://github.com/RussellShaneNavarez/russnvrz-dev" className="block w-full h-full">
                  <img src={image1} alt="Portfolio" />
                  <div className="overlay">
                    <span className="overlay-text">{t("pj1")}</span>
                  </div>
                </a>
              </div>

              <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://github.com/RussellShaneNavarez/RSNWeather" className="block w-full h-full">
                  <img src={image2} alt="RSNWeather" />
                  <div className="overlay">
                    <p className="overlay-text">{t("pj2")}</p>
                  </div>
                </a>
              </div>

            <div className="flex flex-wrap items-center justify-center py-2 px-20 gap-16">

              <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://github.com/RussellShaneNavarez/LazadaRSN" className="block w-full h-full">
                  <img src={image3} alt="LazadaRSN" />
                  <div className="overlay">
                    <span className="overlay-text">{t("pj3")}</span>
                  </div>
                </a>
              </div>
        
              <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://github.com/RussellShaneNavarez/RussCalculus_Navarez" className="block w-full h-full">
                  <img src={image4} alt="RussCalculus" />
                  <div className="overlay">
                    <span className="overlay-text">{t("pj4")}</span>
                  </div>
                </a>
              </div>

              <a href="https://github.com/RussellShaneNavarez">
                <div className='github transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
                  <span className='text-xl font-bold underline-hover'>{t("gh")}</span>
                  <p className="text-9xl">&gt;&gt;</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </>
    )
}