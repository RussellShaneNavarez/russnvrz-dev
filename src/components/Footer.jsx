import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer w-full">
      <div className="py-6 sm:py-12 md:py-16 px-8 sm:px-16 md:px-20 lg:px-32">
        <h2 className="md:w-[75%] lg:w-[80%] w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-200 relative  leading-[110%]">
          Like what you see? Reach out&nbsp;
          <a
            href="mailto:russellnavarez18@gmail.com"
            className="text-primary underline"
          >
            via email
          </a>
          &nbsp;to collaborate!
        </h2>
        <button
          className="call"
          onClick={() =>
            (window.location.href = "mailto:russellnavarez18@gmail.com")
          }
        >
          <p className="text-sm md:text-lg font-medium">Schedule a call</p>
        </button>

        <div class="mt-10 pt-10 border-t border-dark-200 dark:border-white/10 flex flex-col md:flex-row justify-between gap-10 md:gap-0 font-medium">
          <div class="space-y-2.5">
            <h3 class="text-xl font-bold relative z-10 text-stone-200">
              Russell Shane Navarez
            </h3>
            <p class="text-dark-200/70 dark:text-stone-200/70 relative z-10">
              © 2024 | All rights reserved.
            </p>
          </div>
          <div class="flex justify-between gap-10 sm:gap-16 md:gap-10 lg:gap-10">
            <ul class="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li class="text-base sm:text-lg font-semibold text-stone-200">
                Navigate
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="/">Home</a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#about">About</a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#project">Project</a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#wokr">Work</a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <ul class="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li class="text-lg font-semibold text-stone-200">Projects</li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/RussellShaneNavarez/russnvrz-dev"
                >
                  Portfolio
                </a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/RussellShaneNavarez/SpillProject"
                >
                  Spill
                </a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/RussellShaneNavarez/Kusinela"
                >
                  Kusinela
                </a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/RussellShaneNavarez/RSNWeather"
                >
                  Weather
                </a>
              </li>
            </ul>
            <ul class="space-y-2.5 relative z-10 text-sm sm:text-base">
              <li class="text-lg font-semibold text-stone-200">Socials</li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://www.linkedin.com/in/russell-shane-navarez/"
                >
                  LinkedIn
                </a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a
                  href="https://github.com/RussellShaneNavarez"
                >
                  Github
                </a>
              </li>
              <li class="text-dark-200/60 hover:text-dark-200 dark:text-white/50 dark:hover:text-white">
                <a href="https://www.instagram.com/russnvrz/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
