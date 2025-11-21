import { useEffect, useRef, useState } from 'react';

export default function Education() {
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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-graduation-cap mr-3"></i>
          Education
        </h2>

        <div className={`glass-effect rounded-2xl p-8 gold-shadow-lg transition-all duration-500 transform hover:scale-105 border-t-4 border-yellow-400 ${isVisible ? 'animate-scale-in' : ''}`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 text-gray-950 text-2xl animate-rotate-in">
              <i className="fas fa-book"></i>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-100 mb-2">
                B.A. International Relations
              </h3>
              <p className="text-lg font-semibold text-yellow-400 mb-3">
                The Catholic University of Eastern Africa
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <i className="fas fa-calendar"></i>
                <span>2021 – 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
