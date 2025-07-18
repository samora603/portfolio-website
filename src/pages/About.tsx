
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Brain, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React (Hooks, Router, Context API)', icon: Code, level: 85 },
    { name: 'Laravel (Routing, Controllers, APIs)', icon: Globe, level: 75 },
    { name: 'Tailwind CSS & Responsive Design', icon: Palette, level: 90 },
    { name: 'AI Tools (Lovable, Grok, ChatGPT)', icon: Brain, level: 80 },
    { name: 'SEO & Digital Marketing', icon: TrendingUp, level: 70 },
    { name: 'Mobile-First Development', icon: Smartphone, level: 85 }
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
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Musungu Samora"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-cyan-500/10"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-cyan-400">My Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <strong className="text-white">Musungu Samora</strong>, a computer science student and 
                  self-taught React developer passionate about building modern, user-friendly web applications. 
                  Based in Nairobi, I specialize in React, Laravel, and AI-driven tools, delivering tailored 
                  solutions for clients worldwide.
                </p>
                <p>
                  My journey into web development started with curiosity and has evolved into a mission: 
                  to transform ideas into seamless digital experiences. I believe in the power of clean code, 
                  intuitive design, and cutting-edge technology to solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest in AI technology, contributing to 
                  open-source projects, or mentoring aspiring developers in my community.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-4 border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <skill.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Proficiency</span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.2 + (index * 0.2), ease: "easeOut" }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
