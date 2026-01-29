import { FaCode, FaServer, FaPaintBrush } from 'react-icons/fa';

function Services() {
    const services = [
        {
            icon: <FaCode />,
            title: "Frontend Development",
            description: "Build responsive, accessible UIs with React, Tailwind and modern frontend tools."
        },
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Design APIs, databases and server logic for scalable, maintainable apps."
        },
        {
            icon: <FaPaintBrush />,
            title: "Graphic Design",
            description: "Create branding, UI assets and visuals using Illustrator, Photoshop and similar tools."
        }
    ];

    return (
        <div id="services" className="bg-[#F3F4F6] w-full py-20 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-16 gap-6">
                    <div>
                        <h3 className="text-[#818CF8] font-semibold text-lg uppercase tracking-wider mb-2">What I Do</h3>
                        <h2 className="text-3xl md:text-4xl font-[Poppins] text-gray-800 font-bold">Services I Provide</h2>
                    </div>
                    <a href="#contact" className="bg-[#818CF8] hover:bg-[#6366f1] text-white text-lg px-8 py-3 font-bold rounded-lg shadow-lg hover:shadow-[#818CF8]/50 transition-all duration-300 transform hover:-translate-y-1">
                        Start a Project
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100">
                            <div className="w-16 h-16 bg-[#818CF8]/10 rounded-2xl flex items-center justify-center text-[#818CF8] text-3xl mb-6 group-hover:bg-[#818CF8] group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-[inter] font-bold text-gray-800 mb-4 group-hover:text-[#818CF8] transition-colors">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-[Inter]">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services;