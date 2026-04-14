import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import TechnicalFocus from '../components/TechnicalFocus';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <TechnicalFocus />
      <About />
      <Contact />
    </div>
  );
}

