import image from '../assets/abdul.png'

function Herro() {
    return (
        <div id="hero" className="min-h-screen bg-[#0F172A] flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 sm:px-10 py-12">

            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg space-y-4">
                <h6 className="text-[#22D3EE] font-[Poppins] text-xl font-semibold tracking-wide">My Goal</h6>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F8FAFC] leading-tight">
                    Putting <span className='text-[#22D3EE]'>Your Idea</span> <br className="hidden sm:block" /> into Action
                </h1>
                <p className="font-light text-[#94A3B8] text-lg sm:text-xl max-w-md">
                    Let's find out what we can achieve <br className="hidden sm:block" /> together.
                </p>
                <div className="pt-6">
                    <a href="#contact" className="px-8 py-3 bg-[#818CF8] hover:bg-[#6366f1] text-white font-bold rounded-lg shadow-lg hover:shadow-[#818CF8]/50 transition-all duration-300">
                        Work With Me
                    </a>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE] to-[#818CF8] rounded-full blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                    src={image}
                    alt="Abdalla Salad"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-[#0F172A] shadow-2xl transform transition duration-500 hover:scale-105"
                />
            </div>

        </div>
    )
}

export default Herro