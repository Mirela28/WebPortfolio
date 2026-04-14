const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">EDUCATION</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-700 rounded-lg p-8 shadow-lg border border-gray-600">
            <h3 className="text-2xl font-semibold mb-2 text-white">Fontys University of Applied Sciences</h3>
            <p className="text-xl text-blue-400 mb-4">Bachelor of Information and Communication Technology</p>
            <p className="text-gray-300 mb-6">2024 – Present</p>
            <div>
              <h4 className="text-lg font-medium mb-3 text-gray-200">Relevant coursework:</h4>
              <p className="text-gray-300">Software Engineering, Full-Stack Development, Mobile App Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;