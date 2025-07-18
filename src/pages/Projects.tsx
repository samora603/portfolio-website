
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Rapper Website",
      description: "A responsive, visually dynamic website for a musician, featuring a video gallery and modern UI built with React and Tailwind CSS. Includes smooth animations, mobile-first design, and optimized performance.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      date: "2024"
    },
    {
      id: 2,
      title: "AI Chat Interface",
      description: "Modern chat interface powered by AI, featuring real-time messaging, dark/light themes, and intuitive user experience. Built with React and integrated with AI APIs.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "AI Integration", "Real-time", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      date: "2024"
    },
    {
      id: 3,
      title: "Coming Soon",
      description: "Working on exciting new projects—stay tuned for updates! This space will showcase innovative web applications and AI-powered solutions.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Next.js", "AI Tools", "Innovation"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      date: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my work in web development, from dynamic websites to AI-powered applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className={`group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}

                {/* Date */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 text-white/80 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {project.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="bg-gray-700 text-white p-3 rounded-full">
                      <Play className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      View Live →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
                    >
                      View Code →
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <span className="text-gray-500 text-sm font-medium">
                      In Development
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss your next project!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
