import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [selectedStack, setSelectedStack] = useState('JavaScript');

  const techStacks = [
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      description: 'My primary programming language for enterprise development. I build robust, scalable applications using object-oriented design patterns, data structures, and algorithms.',
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'I develop modern, production-ready applications using Spring Boot. I implement RESTful APIs, microservices architecture, and integrate with various databases and cloud services.',
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'I use Python for web development, data analysis, and automation. I work with frameworks like Django and Flask, and implement efficient algorithms and data processing solutions.',
    },
    {
      name: 'PHP',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      description: 'I develop dynamic web applications using PHP. I create server-side logic, handle database operations, and build scalable web solutions with modern PHP practices.',
    },
    {
      name: 'Laravel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
      description: 'I build robust web applications using Laravel framework. I implement MVC architecture, database migrations, authentication systems, and RESTful APIs.',
    },
    {
      name: 'C++',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      description: 'I develop high-performance applications and system-level software using C++. I focus on memory management, data structures, algorithms, and efficient code optimization.',
    }
  ];

  const selectedTech = techStacks.find(stack => stack.name === selectedStack);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my technical skills and experience across different technologies
          </p>
        </motion.div>

        {/* Tech Stack Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {techStacks.map((stack, index) => (
              <motion.button
                key={stack.name}
                onClick={() => setSelectedStack(stack.name)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                  selectedStack === stack.name
                    ? 'bg-primary-100 dark:bg-primary-900/30 scale-110 shadow-lg'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105'
                }`}
              >
                <img
                  src={stack.logo}
                  alt={`${stack.name} logo`}
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {stack.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Tech Card */}
        <motion.div
          key={selectedStack}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl overflow-hidden">
            {/* Background Logo */}
            <div className="absolute top-4 right-4 opacity-5">
              <img
                src={selectedTech?.logo}
                alt={`${selectedTech?.name} background`}
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={selectedTech?.logo}
                  alt={`${selectedTech?.name} logo`}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedTech?.name}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {selectedTech?.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub', 'VS Code', 'IntelliJ',
              'AWS', 'PostgreSQL', 'MySQL', 'pgAdmin', 'Command Line', 'Django',
              'Flask', 'REST APIs', 'MVC', 'OOP', 'Data Structures', 'Algorithms'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-3 text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 