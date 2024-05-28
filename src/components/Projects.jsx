import '../styles/Projects.css'
import image1 from '../assets/images/rsnweather.jpg'; 
import image2 from '../assets/images/lazadarsn.jpg';
import image3 from '../assets/images/russcalculus.jpg';
import image4 from '../assets/images/philippines.jpg';

export const Projects = () => {
    return (
        <>
            <div className="container projects">
      <h2 className="text-7xl px-28">Projects</h2>

      <div className="flex flex-wrap items-center justify-center py-12 px-20 gap-16">
        <p className="text-9xl">&lt;&lt;</p>

        <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <a href="https://github.com/RussellShaneNavarez/RSNWeather" className="block w-full h-full">
            <img src={image1} alt="Placeholder" />
            <div className="overlay">
              <p className="overlay-text">Web Application with OpenWeather API</p>
            </div>
          </a>
        </div>

        <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <a href="https://github.com/RussellShaneNavarez/LazadaRSN" className="block w-full h-full">
            <img src={image2} alt="Placeholder" />
            <div className="overlay">
              <span className="overlay-text">Android Application with Firebase Authentication, Google Maps API & API REST from DummyJSON</span>
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center py-2 px-20 gap-16">
        <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <a href="https://github.com/RussellShaneNavarez/RussCalculus_Navarez" className="block w-full h-full">
            <img src={image3} alt="Placeholder" />
            <div className="overlay">
              <span className="overlay-text">A simple calculator with a built-in dark mode</span>
            </div>
          </a>
        </div>

        <div className="image-container transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300">
          <a href="https://github.com/RussellShaneNavarez/Philippines_Navarez" className="block w-full h-full">
            <img src={image4} alt="Placeholder" />
            <div className="overlay">
              <span className="overlay-text">A simple responsive website dedicated to my home country</span>
            </div>
          </a>
        </div>

        <a href="https://github.com/RussellShaneNavarez">
        <div className='github transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>
            <span className='text-xl font-bold hover:underline '>More on GitHub</span>
            <p className="text-9xl">&gt;&gt;</p>
        </div>
        </a>
       
      </div>

     
    </div>
        </>
    )
}