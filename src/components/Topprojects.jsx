import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import swapSkillsImage from '../assets/swap-skills.png';
import taskmanager from '../assets/task-manager.png';
import construction from '../assets/construction.png';
import jokes from '../assets/jokes.png';
import calculator from '../assets/age-calculator.png';
import agency from '../assets/agency.png';
import couching from '../assets/life-couching.png';
import agrivista from '../assets/Agrivista .png';
import land from '../assets/land.png';

const projectsData = [
    {
        id: 1,
        title: "Agrivista farm",
        description: "A professional website designed for an agrivista farm.",
        image: agrivista,
        link: "https://eng-abdala.github.io/Agrivista/",
    },
    {
        id: 2,
        title: "Task Manager App",
        description: "A simple and efficient todo application to manage your daily tasks.",
        image: taskmanager,
        link: "https://taskflow-front.vercel.app/", // Note: Link seems duplicated in original, keeping as is or should update logic if different
    },
    {
        id: 3,
        title: "Construction Website",
        description: "A professional website designed for a construction company.",
        image: construction,
        link: "https://eng-abdala.github.io/Abdul-Constructions/#service",
    },
    {
        id: 4,
        title: "Jokes App",
        description: "An application that generates random jokes.",
        image: jokes,
        link: "https://eng-abdala.github.io/jokes/",
    },
    {
        id: 5,
        title: "Age Calculator",
        description: "An application that calculates the age of a person.",
        image: calculator,
        link: "https://eng-abdala.github.io/age-calculator/",
    },
    {
        id: 6,
        title: "Agency Website",
        description: "A professional website designed for a marketing agency.",
        image: agency,
        link: "https://eng-abdala.github.io/Marketing-Agency/",
    },
    {
        id: 7,
        title: "Life Couching",
        description: "A professional website designed for a life coaching agency.",
        image: couching,
        link: "https://eng-abdala.github.io/Life-Couching-Web/",
    },
    {
        id: 8,
        title: "Swap Skills",
        description: "A skill exchange platform allowing users to swap their expertise with others.",
        image: swapSkillsImage,
        link: "#",
      
    },
    {
        
        id: 9,
        title: "Land Proker",
        description: "A professional website designed for a land broker.",
        image: land,
        link: "https://eng-abdala.github.io/land-broker/",
    },
];

function TopProjects() {
    const [showMore, setShowMore] = useState(false);

    // Show first 3 projects by default, or all if showMore is true
    const visibleProjects = showMore ? projectsData : projectsData.slice(0, 3);

    return (
        <div className="bg-[#F3F4F6] w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8">
            <div className="max-w-7xl w-full">
                <div className="text-center mb-12">
                    <h1 className="font-bold font-[poppins] text-3xl md:text-4xl text-[#22D3EE] mb-4">Top Projects</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">Explore some of my recent work, ranging from web applications to website designs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="bg-white w-full max-w-[350px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col">
                            <div className="h-[200px] w-full bg-gray-100 flex items-center justify-center p-4 overflow-hidden relative group">
                                <img
                                    className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
                                    src={project.image}
                                    alt={project.title}
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold font-[inter] text-[#818CF8] mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.description}</p>

                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 text-[#818CF8] font-semibold hover:text-[#5a67d8] transition-colors"
                                    >
                                        Live Demo
                                        <FaExternalLinkAlt className="text-sm transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projectsData.length > 3 && (
                    <div className="flex justify-center mt-12">
                        <button
                            className="bg-[#22D3EE] hover:bg-[#06b6d4] text-white text-lg font-[poppins] font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Show Less" : "Explore More Projects"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TopProjects;