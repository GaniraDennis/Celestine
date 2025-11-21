import { useEffect, useRef, useState } from 'react';

const experiences = [
  {
    title: 'Social Media Manager & Digital Evangelist',
    company: 'Kenya Youth For Christ',
    period: 'Dec 2024 – Present',
    icon: 'fa-cross',
    responsibilities: [
      'Manage social media accounts and youth-focused content strategies',
      'Create graphics, reels, and copy',
      'Interact with followers and track insights',
      'Run a digital evangelism community of 100+ youths',
    ],
  },
  {
    title: 'Social Media Manager & Event Organiser',
    company: 'Sky Girls Kenya',
    period: 'Sept 2023 – Jan 2024',
    icon: 'fa-girls',
    responsibilities: [
      'Produced campaign content for adolescent girls',
      'Managed Instagram/Facebook pages and boosted engagement',
      'Provided digital event promotion and real-time coverage',
    ],
  },
  {
    title: 'Mentor & Library Operator',
    company: 'SHOFCO',
    period: 'Apr 2023 – Jan 2024',
    icon: 'fa-book',
    responsibilities: [
      'Helped with communication, documentation, and youth storytelling',
      'Supported community spaces and program visibility',
    ],
  },
  {
    title: 'Business Owner',
    company: 'Entrepreneur',
    period: 'Mar – Aug 2020',
    icon: 'fa-store',
    responsibilities: [
      'Promoted products online, created marketing content, managed customer engagement',
    ],
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-briefcase mr-3"></i>
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-600 to-yellow-400 transform md:-translate-x-1/2 animate-glow"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                <div className="md:w-1/2 md:px-8">
                  <div className="glass-effect rounded-2xl p-6 hover:gold-shadow-lg transition-all duration-500 transform hover:scale-105 border-l-4 border-yellow-400">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-950 animate-rotate-in">
                        <i className={`fas ${exp.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
                    </div>
                    <p className="text-lg font-semibold text-yellow-400 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <i className="fas fa-calendar"></i>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex gap-2">
                          <span className="text-yellow-400 flex-shrink-0">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full ring-4 ring-gray-900 shadow-xl animate-glow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
