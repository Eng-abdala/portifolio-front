import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobepremierepro } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs } from 'react-icons/fa';
import { FaStar, FaRegStar } from 'react-icons/fa';

const SkillCard = ({ icon, title, stars }) => (
    <div className="bg-[#1e293b] rounded-xl p-6 shadow-lg hover:shadow-2xl shadow-[#818CF8]/10 hover:shadow-[#818CF8]/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center gap-4 border border-gray-700/50 hover:border-[#818CF8]/50">
        <div className="text-[#818CF8] text-5xl mb-2 transition-transform duration-300 hover:scale-110">
            {icon}
        </div>
        <h3 className="text-xl font-bold font-[inter] text-[#F8FAFC]">{title}</h3>
        <div className="flex gap-1 text-[#94A3B8]">
            {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm">
                    {i < stars ? <FaStar className="text-[#22D3EE]" /> : <FaRegStar className="opacity-50" />}
                </span>
            ))}
        </div>
    </div>
);

function Skills() {
    const skills = {
        frontend: [
            { icon: <FaHtml5 />, title: "HTML5", stars: 5 },
            { icon: <FaCss3Alt />, title: "CSS", stars: 5 },
            { icon: <FaJs />, title: "Javascript", stars: 5 },
            { icon: <FaReact />, title: "React", stars: 4 },
        ],
        backend: [
            { icon: <FaPython />, title: "Python", stars: 5 },
            { icon: <FaJava />, title: "Java", stars: 5 },
            { icon: <FaNodeJs />, title: "Node.js", stars: 4 },
            { icon: <FaReact />, title: "Express.js", stars: 4 }, // Reusing React icon as placeholder or suggest adding explicit express icon
        ],
        multimedia: [
            { icon: <SiAdobeillustrator />, title: "Illustrator", stars: 4 },
            { icon: <SiAdobephotoshop />, title: "Photoshop", stars: 5 },
            { icon: <SiAdobeindesign />, title: "InDesign", stars: 3 },
            { icon: <SiAdobepremierepro />, title: "Premiere Pro", stars: 3 },
        ]
    };

    return (
        <div id="skills" className="bg-[#0F172A] w-full py-20 px-6 sm:px-12 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#818CF8] font-semibold text-lg uppercase tracking-wider mb-2">My Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-bold font-[poppins] text-[#F8FAFC]">My Skills</h1>
                </div>

                {/* Frontend */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-8 border-l-4 border-[#22D3EE] pl-4">Frontend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.frontend.map((skill, idx) => <SkillCard key={idx} {...skill} />)}
                    </div>
                </div>

                {/* Backend */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-8 border-l-4 border-[#22D3EE] pl-4">Backend Development</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.backend.map((skill, idx) => <SkillCard key={idx} {...skill} />)}
                    </div>
                </div>

                {/* Multimedia */}
                <div>
                    <h3 className="text-2xl font-semibold text-[#F8FAFC] mb-8 border-l-4 border-[#22D3EE] pl-4">Multimedia</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {skills.multimedia.map((skill, idx) => <SkillCard key={idx} {...skill} />)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;