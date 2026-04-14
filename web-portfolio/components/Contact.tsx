const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">CONTACT</h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm open to internship opportunities in software engineering, full-stack, mobile app, or AI-related fields.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Email</h3>
            <a href="mailto:mirelagirleanu@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              mirelagirleanu@gmail.com
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/mirela-g%C3%AErleanu-709051326/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              Mirela Gîrleanu
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;