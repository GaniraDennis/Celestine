import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-effect border-b border-gray-800 backdrop-blur-md'
          : 'bg-transparent'
      }`}
      style={{ animation: 'fadeInDown 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center group cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/lOGO .png"
              alt="Logo"
              className="h-12 w-12 animate-float transition-transform group-hover:scale-110"
            />
            <span className="ml-3 text-xl font-bold gold-gradient hidden sm:inline">CA</span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experience', id: 'experience' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg text-gray-300 hover:text-yellow-400 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-950 font-semibold hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 animate-glow"
          >
            <i className="fas fa-envelope"></i>
            Contact
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-400 text-2xl"
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in-down">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Skills', id: 'skills' },
              { name: 'Experience', id: 'experience' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-yellow-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
