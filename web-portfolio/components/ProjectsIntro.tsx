const ProjectsIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Explore My Projects</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover my journey through software development, from full-stack applications to AI-powered mobile solutions.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-sm">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default ProjectsIntro;