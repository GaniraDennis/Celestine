import { useEffect, useRef, useState } from 'react';

const achievements = [
  {
    title: 'SHOFCO Employability Training',
    description: 'Communication & Personal Branding',
    year: '2021',
    icon: 'fa-certificate',
  },
  {
    title: 'Innovate Kenya',
    description: 'Invented a Solar Wheelchair',
    year: '2019',
    icon: 'fa-lightbulb',
  },
  {
    title: 'NEMA Award',
    description: 'Best Composition Writing Student',
    year: '2019',
    icon: 'fa-medal',
  },
];

export default function Training() {
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
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-trophy mr-3"></i>
          Training & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 hover:gold-shadow-lg border-b-4 border-yellow-400 transform hover:-translate-y-3 transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 mx-auto text-gray-950 text-2xl group-hover:animate-rotate-in">
                <i className={`fas ${achievement.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2 text-center group-hover:text-yellow-400 transition-colors">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-center mb-3">{achievement.description}</p>
              <p className="text-sm text-yellow-400 font-semibold text-center">{achievement.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
