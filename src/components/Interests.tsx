import { useEffect, useRef, useState } from 'react';

const interests = [
  { name: 'Content Creation', icon: 'fa-camera' },
  { name: 'Storytelling', icon: 'fa-pen-fancy' },
  { name: 'Digital Trends', icon: 'fa-fire' },
  { name: 'Photography', icon: 'fa-image' },
];

export default function Interests() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-heart mr-3 text-red-500"></i>
          Interests
        </h2>

        <div className="glass-effect rounded-2xl p-8 gold-shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-8">
            <i className="fas fa-heart text-yellow-400 text-2xl animate-pulse"></i>
            <p className="text-lg text-gray-300">Passionate about</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className={`flex flex-col items-center group cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-3 text-gray-950 text-3xl gold-shadow-lg transform group-hover:scale-125 group-hover:animate-rotate-in transition-all duration-300">
                  <i className={`fas ${interest.icon}`}></i>
                </div>
                <p className="text-gray-100 font-semibold text-center group-hover:text-yellow-400 transition-colors">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
