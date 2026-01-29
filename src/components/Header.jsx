import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'top-projects' }, // Make sure ID matches in Topprojects.jsx if you add it there
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#1e293b] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold font-[poppins] text-[#F8FAFC] cursor-pointer">
            Eng.<span className="text-[#22D3EE]">abdalla</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={handleScroll(item.id)}
                className="text-[#94A3B8] font-[Inter] text-lg font-medium hover:text-[#22D3EE] transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22D3EE] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={handleScroll('contact')}
            className="bg-[#818CF8] hover:bg-[#6366f1] text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:shadow-[#818CF8]/30 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F8FAFC] text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <div className={`md:hidden bg-[#0F172A] border-t border-[#1e293b] overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center py-6 gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.id}`}
                onClick={handleScroll(item.id)}
                className="text-[#94A3B8] text-xl font-medium hover:text-[#22D3EE] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleScroll('contact')}
              className="inline-block bg-[#818CF8] text-white px-8 py-2 rounded-lg font-bold mt-2"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;