const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">ABOUT</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">How I Started</h3>
            <div className="bg-gray-700 rounded-lg p-6 mb-8">
              <h4 className="text-xl font-medium mb-2 text-white">Robotics & Programming Course | Java | Arduino | Embedded Systems | 2018 – 2020</h4>
              <p className="text-gray-300">
                This was where my interest in technology began. I worked on small projects involving Arduino boards, sensors, diodes, and robotics, which introduced me to programming and practical problem solving.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Personal Learning</h3>
            <p className="text-gray-300 mb-4">
              I like to follow extra courses from time to time related to my professional field, these are some of the more complex ones I managed to complete.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-600">
                <h4 className="text-lg font-medium mb-2 text-white">Oracle Academy – Java Programming | 2026</h4>
                <p className="text-gray-300">Focus on advanced OOP, JVM fundamentals, and memory management</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-6 shadow-lg border border-gray-600">
                <h4 className="text-lg font-medium mb-2 text-white">Udemy – Ultimate C# Masterclass for 2025 | 2025</h4>
                <p className="text-gray-300">Focus on advanced OOP, multithreading, and clean code</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Beyond Tech</h3>
            <div className="bg-gray-700 rounded-lg p-6">
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">•</span>
                  Gym / fitness - staying active
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">•</span>
                  Learning languages - English (TOEFL certified), French, Russian
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">•</span>
                  Currently learning Dutch
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-3">•</span>
                  Travelling and exploring cultures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;