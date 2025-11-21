import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Social Media Management', desc: 'Instagram, Facebook, TikTok, X', icon: 'fa-share-alt' },
  { name: 'Content Creation', desc: 'graphics, reels, captions', icon: 'fa-pen' },
  { name: 'Canva & Adobe Suite', desc: 'Design tools', icon: 'fa-palette' },
  { name: 'Photography & Video', desc: 'Short-form content', icon: 'fa-camera' },
  { name: 'Analytics & Reporting', desc: 'Performance insights', icon: 'fa-chart-line' },
  { name: 'Campaign Planning', desc: 'Online engagement', icon: 'fa-rocket' },
  { name: 'Copywriting', desc: 'Brand messaging', icon: 'fa-pen-fancy' },
  { name: 'Event Promotion', desc: 'Live coverage', icon: 'fa-calendar' },
  { name: 'Trend Research', desc: 'Audience insights', icon: 'fa-trending-up' },
];

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-star mr-3"></i>
          Key Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 hover:gold-shadow-lg border border-yellow-400/30 transform hover:scale-110 transition-all duration-500 group cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:animate-rotate-in">
                <i className={`fas ${skill.icon} text-gray-950 text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-yellow-400 transition-colors">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
