const TechnicalFocus = () => {
  const focuses = [
    {
      title: 'Clean Code',
      description: 'Maintainable, readable, structured code using SOLID principles'
    },
    {
      title: 'Architecture',
      description: 'Separation of concerns, layered thinking, scalable design'
    },
    {
      title: 'Software Quality',
      description: 'SonarQube, security awareness, OWASP thinking, ISO/IEC 25010-inspired quality focus'
    },
    {
      title: 'Testing & API Validation',
      description: 'Unit, integration, end-to-end testing, Postman, Swagger'
    },
    {
      title: 'Teamwork & Management',
      description: 'Agile, Scrum, Kanban, Jira, team coordination'
    }
  ];

  return (
    <section id="technical-focus" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">TECHNICAL FOCUS</h2>
        <p className="text-xl text-center text-gray-300 mb-12">
          In my projects I put strong focus on:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focuses.map((focus, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{focus.title}</h3>
              <p className="text-gray-300">{focus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalFocus;