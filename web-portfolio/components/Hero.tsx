'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import profilePic from '../assets/images/MePicture.jpeg';

const Hero = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-700 ${heroLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Mirela Girleanu
              </h1>
              <p className="text-xl md:text-2xl text-blue-400 mb-6 font-medium">
                ICT Student | Software Engineering | Full-Stack Development | Mobile App Development | AI & Machine Learning
              </p>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                My name is Mirela Girleanu, I am 20 years old and I am a passionate ICT student in the Netherlands. I have a strong interest in software engineering and full-stack development. Currently, I am also exploring the exciting fields of mobile app development and AI & machine learning.
                I have gained practical experience and proved my skills through personal and client projects, which you can find in the Projects section of this portfolio. I am eager to apply my knowledge to real-world projects and contribute to innovative software solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </button>
            </div>

            
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className={`relative transition-all duration-1000 delay-150 ${heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} float-slow`}>
              <div className="w-80 h-100 overflow-hidden border-2 border-white shadow-2xl rounded-3xl">
                <Image
                  src={profilePic}
                  alt="Mirela Girleanu"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;