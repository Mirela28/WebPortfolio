'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import glowImage from '../assets/images/GLOWproject.png';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'The Share Hub',
      type: 'Individual Project',
      date: '09.2025 – 01.2026',
      summary: 'Built a full-stack peer-to-peer rental platform using a Spring Boot REST API, React.js frontend, and MySQL database. Implemented JWT-based authentication, unit/integration/end-to-end testing, and CI/CD pipelines with GitHub Actions to build and publish Docker images.',
      stack: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Docker'],
      github: '#',
      demo: '#',
      image: glowImage, // placeholder
      video: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Q3 Maintenance Software',
      type: 'Client Project | Group Project',
      date: '09.2025 – 01.2026',
      summary: 'Collaborated in a 6-member team to improve an existing web application used to monitor machines and molds in a factory environment. Implemented a machine failure reporting system, improved data calculation and visualization, developed an SMS notification feature, and served as Scrum Master. Worked with Next.js on the frontend and Supabase/PostgreSQL on the backend.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Scrum'],
      github: '#',
      demo: '#',
      image: glowImage,
      video: '#',
      category: 'Client Projects'
    },
    {
      title: 'Orderly',
      type: 'Client Project | Group Project',
      date: '02.2025 – 06.2025',
      summary: 'Collaborated in a 6-member team to develop a restaurant management web application supporting workflows for customers, chefs, waiters, managers, and owners. Contributed to frontend flows and backend logic using ASP.NET MVC and SQL.',
      stack: ['ASP.NET MVC', 'SQL'],
      github: '#',
      demo: '#',
      image: glowImage,
      video: '#',
      category: 'Client Projects'
    },
    {
      title: 'GLOW',
      type: 'Client Project | Group Project',
      date: '04.2026 – Present',
      summary: 'Working in a 4-member team to build a mobile application that allows teachers to upload children’s artworks and transform them into an animated collage for the GLOW festival. Using React.js and TypeScript for frontend, Python for backend image processing and animation generation, and Hetzner Cloud with MySQL for hosting and storage.',
      stack: ['React.js', 'TypeScript', 'Python', 'MySQL'],
      github: '#',
      demo: '#',
      image: glowImage,
      video: '#',
      category: 'Mobile Apps'
    },
    {
      title: 'Scam Spot AI',
      type: 'Individual Project',
      date: '02.2026 – 04.2026',
      summary: 'Developed a mobile phishing detection application that analyzes user-submitted cases and assesses scam likelihood. Built a Random Forest machine learning model in Python, developed the mobile frontend in Swift, and stored case data in Supabase with PostgreSQL.',
      stack: ['Python', 'Swift', 'Supabase', 'PostgreSQL', 'AI/ML'],
      github: '#',
      demo: '#',
      image: glowImage,
      video: '#',
      category: 'AI/ML'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Client Projects', 'Mobile Apps', 'AI/ML'];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} featured />
            ))}
          </div>
        </div>

        {/* All projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, featured = false }: { project: {
  title: string;
  type: string;
  date: string;
  summary: string;
  stack: string[];
  github: string;
  demo: string;
  image: StaticImageData;
  video: string;
  category: string;
}; featured?: boolean }) => {
  return (
    <div className={`bg-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${featured ? 'md:col-span-1' : ''}`}>
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-2">{project.type} | {project.date}</p>
        <p className="text-slate-300 mb-4 line-clamp-3">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, i) => (
            <span key={i} className="bg-slate-600 text-slate-300 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
            GitHub
          </button>
          <button className="border border-slate-600 hover:border-slate-500 text-white px-4 py-2 rounded font-medium transition-colors">
            Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;