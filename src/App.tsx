import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Training from './components/Training';
import Tools from './components/Tools';
import Interests from './components/Interests';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Training />
      <Tools />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
