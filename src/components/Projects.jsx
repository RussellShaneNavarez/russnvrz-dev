import "../styles/Projects.css";
import data from "../assets/json/projects.json";

import portfolio from "../assets/images/portfolio.png";
import kusinela from "../assets/images/kusinela.png"
import spill from "../assets/images/spill.png"
import rsnweather from "../assets/images/rsnweather.png";

const imageMap = {
  "portfolio.png": portfolio,
  "kusinela.png": kusinela,
  "spill.png" : spill,
  "rsnweather.png": rsnweather,
};

export const Projects = () => {
  return (
    <div className="projects w-full">
      <div className="py-4 sm:py-12 md:py-16 px-8 sm:px-16 md:px-20 lg:px-32">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <h2 className="font-bold text-stone-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Relevant Projects
          </h2>
          <button
            className="all-projects gap-[0.25rem]"
            onClick={() =>
              (window.location.href = "https://github.com/RussellShaneNavarez")
            }
          >
            <p className="font-medium">All Projects</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>

        <div className="projects-container w-full py-6 sm:py-12 md:py-16 md:columns-2 gap-4 font-medium">
          {data.map((data, index) => {

            const projectImage = imageMap[data.image];

            return (
            <div className="project flex flex-col mb-4 overflow-hidden" key={index}>
            <div className="m-2 overflow-hidden rounded-lg">
              <img src={projectImage} alt={data.title} className="hover:scale-110 transition-transform duration-700 cursor-pointer"/>
            </div>

            <div className="p-2 flex flex-col w-full">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl md:text-3xl">{data.title}</h3>
                <a className="source-code text-sm" href={data.sourceCode.link} target="_blank" rel="noopener noreferrer">
                  {data.sourceCode.text}
                </a>
              </div>

              <div className="py-3">
                <p className="text-sm md:text-lg">
                  {data.description}
                </p>
              </div>

              <div className="w-full flex flex-wrap gap-2">
                {data.skills.map((skill, skillIndex) => (
                  <p 
                    className="project-skills text-sm"
                    key={skillIndex}
                  >{skill}</p>
                ))}
              </div>
            </div>
          </div>
          )})}
          
        </div>
      </div>
    </div>
  );
};
