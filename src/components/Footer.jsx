import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-[#1F2937] w-full py-10 px-6 sm:px-12 md:px-20 text-white border-t border-gray-700">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">

                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <h2 className="text-lg font-[Poppins] font-semibold text-[#22D3EE] mb-1">Location</h2>
                    <p className="text-[#94A3B8] flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                        <FaMapMarkerAlt className="text-[#818CF8] group-hover:text-[#22D3EE]" />
                        Mogadishu, Somalia
                    </p>
                </div>

                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <h2 className="text-lg font-[Poppins] font-semibold text-[#22D3EE] mb-1">Mobile</h2>
                    <p className="text-[#94A3B8] flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                        <FaPhone className="text-[#818CF8] group-hover:text-[#22D3EE]" />
                        061 3482561
                    </p>
                </div>

                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <h2 className="text-lg font-[Poppins] font-semibold text-[#22D3EE] mb-1">Social Media</h2>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#94A3B8] flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                        <FaInstagram className="text-[#818CF8] group-hover:text-[#22D3EE]" />
                        @Eng.abdalla
                    </a>
                </div>

                <div className="flex flex-col gap-3 items-center sm:items-start">
                    <h2 className="text-lg font-[Poppins] font-semibold text-[#22D3EE] mb-1">Email</h2>
                    <a href="mailto:abdul482561@gmail.com" className="text-[#94A3B8] flex items-center gap-3 hover:text-white transition-colors duration-300 group">
                        <FaEnvelope className="text-[#818CF8] group-hover:text-[#22D3EE]" />
                        abdul482561.com
                    </a>
                </div>

            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 text-center text-[#94A3B8] text-sm">
                &copy; {new Date().getFullYear()} Eng.abdalla. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;