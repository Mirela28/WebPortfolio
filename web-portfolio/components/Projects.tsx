'use client';

import Image, { type StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import glowImage from '../assets/images/GLOWproject.png';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: number;
  title: string;
  type: string;
  date: string;
  category: string;
  summary: string;
  technologies: string[];
  github: string;
  mediaType: 'video' | 'image';
  mediaSrc: string | StaticImageData;
  featured: boolean;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const projects: Project[] = [ 
    {
      id: 1,
      title: 'The Share Hub',
      type: 'Individual Project',
      date: '09.2025 – 01.2026',
      category: 'fullstack',
      summary: 'Built a full-stack peer-to-peer rental platform using Spring Boot REST APIs, React.js, and MySQL. Implemented JWT authentication, end-to-end testing, and CI/CD with GitHub Actions.',
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'SonarQube', 'Docker'],
      github: 'https://github.com/Mirela28/TheShareHub.git',
      mediaType: 'video',
      mediaSrc: '/videos/TheShareHubDemo.mp4',
      featured: true
    },
    {
      id: 2,
      title: 'Q3 Maintenance Software',
      type: 'Client Project',
      date: '09.2025 – 01.2026',
      category: 'fullstack',
      summary: 'Improved a factory monitoring web app with machine failure alerts, SMS notifications, and enhanced data visualization while serving as Scrum Master.',
      technologies: ['Next.js', 'Supabase', 'PostgreSQL', 'Scrum'],
      github: 'https://github.com/q3s3Group1/q3s3_Group_1.git',
      mediaType: 'video',
      mediaSrc: '/videos/Q3MaintenanceSoftwareDemo.mp4',
      featured: true
    },
    {
      id: 3,
      title: 'Orderly | Conclusion Intelligence',
      type: 'Client Project',
      date: '02.2025 – 06.2025',
      category: 'fullstack',
      summary: 'Developed a restaurant management web app covering digital menus, chef workflows, waiter interfaces, and manager dashboards using ASP.NET MVC and SQL.',
      technologies: ['ASP.NET MVC', 'SQL', 'C#'],
      github: 'https://git.fhict.nl/I567612/Orderly.git',
      mediaType: 'video',
      mediaSrc: '/videos/RestaurantManagementDemo.MP4',
      featured: false
    },
    {
      id: 4,
      title: 'GLOW | De Ontdekfabriek',
      type: 'Client Project',
      date: '04.2026 – Present',
      category: 'fullstack',
      summary: 'Building a mobile app that turns children\'s artworks into animated festival collages using React.js, Python image processing, and Hetzner-hosted storage.',
      technologies: ['React.js', 'TypeScript', 'Python', 'MySQL', 'Hetzner Cloud'],
      github: 'https://github.com/Jordib2/glowservertestrepo.git',
      mediaType: 'image',
      mediaSrc: glowImage,
      featured: true
    },
    {
      id: 5,
      title: 'Scam Spot AI',
      type: 'Individual Project',
      date: '02.2026 – 04.2026',
      category: 'mobile-ai',
      summary: 'Built a phishing detection app using a Python Random Forest model and a Swift mobile frontend, with Supabase/PostgreSQL for case storage.',
      technologies: ['Swift', 'Python', 'Random Forest', 'Supabase', 'PostgreSQL'],
      github: 'https://github.com/Mirela28/ScamSpot.git',
      mediaType: 'video',
      mediaSrc: '/videos/ScamSpotAIVideo.mp4',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'mobile-ai', label: 'Mobile & AI' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects.filter((p) => !p.featured)
    : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.scroll-reveal');

      gsap.set(items, {
        autoAlpha: 0,
        y: 40,
        scale: 0.98,
      });

      items.forEach((item) => {
        gsap.to(item, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [activeFilter]);

  const renderMedia = (project: { mediaType: 'video' | 'image'; mediaSrc: string | StaticImageData }) => {
    if (project.mediaType === 'video') {
      return (
        <video
          controls
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          src={project.mediaSrc as string}
        />
      );
    }

    return (
      <Image
        src={project.mediaSrc}
        alt="Project media"
        fill
        className="object-cover"
      />
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-white scroll-reveal">PROJECTS</h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto scroll-reveal">
          A showcase of my technical skills through real-world applications, from full-stack web platforms to AI-powered mobile solutions.
        </p>

        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="bg-gray-700 rounded-full p-1 flex flex-wrap gap-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {activeFilter === 'all' && (
          <div className="mb-16 scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8 text-center text-blue-400">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter((p) => p.featured).map((project) => (
                <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 hover:shadow-xl transition-shadow scroll-reveal">
                  <div className="h-56 relative bg-black">
                    {renderMedia(project)}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-blue-400 text-sm">{project.type} | {project.date}</p>
                      </div>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-600 hover:bg-gray-500 text-gray-300 hover:text-white px-3 py-1 rounded text-sm transition-colors">
                          GitHub
                        </button>
                      </a>
                    </div>
                    <p className="text-gray-300 mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg border border-gray-600 hover:shadow-xl transition-shadow scroll-reveal">
              <div className="h-52 relative bg-black">
                {renderMedia(project)}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 text-sm mb-3">{project.type} | {project.date}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.summary}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                <button className="w-full bg-gray-600 hover:bg-gray-500 text-gray-300 hover:text-white px-3 py-2 rounded text-sm transition-colors">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
