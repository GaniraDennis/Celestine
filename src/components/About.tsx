import { useEffect, useRef, useState } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <h2 className="text-4xl md:text-5xl font-black mb-12 text-center gold-gradient">
          <i className="fas fa-user-circle mr-3"></i>
          About Me
        </h2>

        <div className="glass-effect rounded-3xl p-8 md:p-12 border-l-4 border-yellow-400 hover:gold-shadow-lg transition-all duration-500 transform hover:scale-105">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Creative and results-driven Social Media Manager with experience in content creation, digital campaigns, youth-focused communication, and online community engagement. Skilled in managing multi-platform social channels, designing visuals, producing short-form videos, and analyzing performance insights. Passionate about storytelling, trends, and building meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
