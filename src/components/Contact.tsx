import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-black mb-12 text-center gold-gradient ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <i className="fas fa-envelope mr-3"></i>
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${isVisible ? 'animate-slide-in-left' : ''}`}>
            <div className="glass-effect rounded-2xl gold-shadow-lg p-8 h-full border-l-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 text-gray-950 text-xl group-hover:animate-rotate-in">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:celestineawuoth@gmail.com" className="text-gray-100 font-medium hover:text-yellow-400 transition-colors">
                      celestineawuoth@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 text-gray-950 text-xl group-hover:animate-rotate-in">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a href="tel:+254797676943" className="text-gray-100 font-medium hover:text-yellow-400 transition-colors">
                      +254 797 676 943
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xl group-hover:animate-rotate-in animate-glow">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                    <a href="https://wa.me/254797676943" target="_blank" rel="noopener noreferrer" className="text-gray-100 font-medium hover:text-green-400 transition-colors">
                      +254 797 676 943
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-100 mb-4">Connect on Social Media</h4>
                <div className="flex gap-4 flex-wrap">
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center hover:gold-shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-950">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-400/50 transform hover:scale-110 transition-all duration-300 text-white">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110 transition-all duration-300 text-white">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-white border border-gray-600">
                    <i className="fab fa-tiktok text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
            <div className="glass-effect rounded-2xl gold-shadow-lg p-8 border-r-4 border-yellow-400">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-gray-100 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-gray-100 placeholder-gray-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-gray-100 placeholder-gray-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-950 px-6 py-3 rounded-xl font-bold shadow-lg hover:gold-shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner animate-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="p-4 bg-green-900/30 border border-green-600 rounded-xl text-green-300 text-sm animate-fade-in-up">
                    <i className="fas fa-check-circle mr-2"></i>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            © 2025 Celestine Auma Awuoth. All rights reserved.
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/254797676943"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:shadow-green-400/50 transform hover:scale-110 transition-all duration-300 animate-bounce z-40"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </section>
  );
}
