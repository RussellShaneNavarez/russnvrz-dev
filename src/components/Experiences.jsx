import { useState } from "react";
import "../styles/Experiences.css";
import data from "../assets/json/experiences.json";

export const Experiences = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const cv = "/files/cv_navarez.pdf";

  const openPdf = () => {
    window.open(cv, "_blank");
  };

  return (
    <div className="experiences w-full">
      <div className="py-4 sm:py-12 md:py-16 px-8 sm:px-16 md:px-20 lg:px-32">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <h2 className="font-bold text-stone-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Experiences
          </h2>
          <button className="cv-btn gap-[0.25rem]" onClick={openPdf}>
            <p className="font-medium">Download CV</p>
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

        <div className="experiences-container w-full py-6 sm:py-12 md:py-16 gap-4 font-medium">
          <div className="grid grid-cols-3 gap-4 h-screen">
            {/* Left Column */}
            <div className="col-span-1 bg-gray-100 rounded-2xl p-4 shadow-md">
              <ul className="space-y-2">
                {data.map((data) => (
                  <li
                    key={data.id}
                    onClick={() => setSelectedItem(data)}
                    className="p-2 cursor-pointer rounded-lg bg-white hover:bg-blue-100 transition"
                  >
                    {data.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-span-2 bg-white rounded-2xl p-4 shadow-md">
              {selectedItem ? (
                <div>
                    <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold mb-2">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    {selectedItem.content.location}
                  </p>
                    </div>
                  
                  <p className="text-gray-700 mb-2">
                    {selectedItem.content.role}
                  </p>
                  
                  <p className="text-gray-400 mb-2">
                    {selectedItem.content.startDate} - {selectedItem.content.fromDate}
                  </p>
                  <div className="space-y-2 mt-4">
                    {Object.entries(selectedItem.content.bps).map(
                      ([key, value]) => (
                        <p key={key} className="text-gray-600">
                          {value}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ) : (
                <p className="text-gray-500">
                  Select an item from the list to view details.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
