const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C#', 'Python', 'Swift', 'JavaScript', 'SQL']
    },
    {
      title: 'Frameworks & Technologies',
      skills: ['Spring Boot', 'ASP.NET', 'FastAPI', 'React.js', 'Next.js', 'TypeScript']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'Supabase']
    },
    {
      title: 'DevOps & Tools',
      skills: ['GitHub', 'Docker', 'CI/CD', 'SonarQube', 'Swagger', 'Postman', 'Jira']
    },
    {
      title: 'Methodologies',
      skills: ['Agile', 'Scrum', 'Kanban']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">KEY SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;