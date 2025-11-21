import { useEffect, useRef, useState } from 'react';

const tools = [
  { name: 'Canva', category: 'Design', icon: 'fa-palette' },
  { name: 'CapCut', category: 'Video Editing', icon: 'fa-film' },
  { name: 'InShot', category: 'Video Editing', icon: 'fa-video' },
  { name: 'Meta Business Suite', category: 'Social Media', icon: 'fa-meta' },
  { name: 'Instagram Insights', category: 'Analytics', icon: 'fa-chart-bar' },
  { name: 'MS Office', category: 'Productivity', icon: 'fa-file-excel' },
];

export default function Tools() {
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
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-tools mr-3"></i>
          Digital Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`glass-effect rounded-xl p-4 hover:gold-shadow-lg border border-yellow-400/40 transform hover:scale-110 transition-all duration-500 group cursor-pointer ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-3 mx-auto text-gray-950 text-xl group-hover:animate-rotate-in">
                <i className={`fas ${tool.icon}`}></i>
              </div>
              <h3 className="text-sm font-bold text-gray-100 text-center mb-1 group-hover:text-yellow-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-400 text-center">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
