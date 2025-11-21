import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 py-20 mt-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={`max-w-5xl text-center relative z-10 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <div className="mb-8">
          <div className={`w-40 h-40 mx-auto rounded-full overflow-hidden mb-8 border-4 border-yellow-400 shadow-2xl relative transform ${isVisible ? 'animate-scale-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <img
              src="/Profile Photo.jpg"
              alt="Celestine Auma Awuoth"
              className="w-full h-full object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-30"></div>
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl font-black mb-4 tracking-tight gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
          Celestine Auma Awuoth
        </h1>

        <p className={`text-xl md:text-2xl text-yellow-300 mb-6 font-light ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
          Social Media Manager | Content Creator | Brand Influencer
        </p>

        <div className={`flex flex-wrap justify-center gap-4 md:gap-6 text-gray-300 mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect">
            <i className="fas fa-map-marker-alt text-yellow-400"></i>
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect">
            <i className="fas fa-phone text-yellow-400"></i>
            <span>+254 797 676 943</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect">
            <i className="fas fa-envelope text-yellow-400"></i>
            <span>celestineawuoth@gmail.com</span>
          </div>
        </div>

        <button
          onClick={scrollToWork}
          className={`inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-950 px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-110 transition-all duration-300 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          <i className="fas fa-arrow-down animate-bounce"></i>
          View My Work
        </button>
      </div>
    </section>
  );
}
