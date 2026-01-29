import about from '../assets/about-img.jpg'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function About() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div id="about" className='bg-[#0F172A] w-full py-16 px-6 sm:px-10 flex items-center justify-center min-h-[80vh]'>
            <div className='max-w-6xl w-full bg-[#1e293b] shadow-2xl shadow-[#818CF8]/20 rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row items-stretch'>

                {/* Text Content */}
                <div className='flex-1 p-8 sm:p-12 text-[#94A3B8] flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold font-[Poppins] text-[#F8FAFC] mb-6'>About Me</h2>

                    <div className='font-[Inter] text-lg leading-relaxed space-y-4 text-justify'>
                        <p>
                            <span className='font-bold text-[#22D3EE] font-[Poppins]'>I am Abdalla Salad Mohamed</span>
                        </p>
                        <p>
                            A Full Stack Developer and Software Engineering enthusiast who loves turning ideas into real, functional, and visually striking digital products. With strong experience in the MERN stack, front-end development, and database design, I enjoy building applications that are clean, efficient, and intuitive.
                        </p>
                        <p>
                            Beyond coding, I’m also a Graphic Designer and Content Creator, blending creativity with technology to craft modern interfaces, smooth user experiences, and professional visuals. I’ve even produced video-editing content and tutorials, helping beginners understand complex concepts in a simple, engaging way.
                        </p>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className='mt-4 pt-4 border-t border-gray-700'>
                                I’m passionate about continuous growth — whether through building full-stack applications, collaborating on team projects, or exploring new technologies to improve my craft. I enjoy solving problems, learning fast, and adapting to new challenges.
                            </p>
                        </div>
                    </div>

                    <button
                        className='mt-6 text-[#22D3EE] hover:text-[#818CF8] font-semibold flex items-center gap-2 transition-colors self-start'
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? (
                            <>See Less <FaChevronUp /></>
                        ) : (
                            <>Read More <FaChevronDown /></>
                        )}
                    </button>
                </div>

                {/* Image Side */}
                <div className='md:w-2/5 relative min-h-[300px] md:min-h-full'>
                    <img
                        src={about}
                        alt="About Abdalla"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#818CF8]/20 md:bg-transparent md:hover:bg-[#818CF8]/10 transition-colors"></div>

                    <div className="absolute bottom-6 left-0 right-0 text-center md:hidden">
                        <a href="#contact" className="inline-block bg-[#818CF8] hover:bg-[#6366f1] text-[#F8FAFC] px-6 py-2 font-bold text-lg rounded-full shadow-lg transition-transform hover:-translate-y-1">
                            Contact Me
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About