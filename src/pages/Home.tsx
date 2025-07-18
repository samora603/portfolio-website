
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgb(6 182 212)' fill-opacity='0.1'%3E%3Cpath d='m0 40L40 0H20L0 20M40 40V20l20 20'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center space-x-2 text-cyan-400"
              >
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium tracking-wide uppercase">Welcome to my portfolio</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Musungu Samora
                </span>
                .
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl md:text-3xl font-semibold text-gray-300"
              >
                I Build the Future of the Web.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              A Nairobi-based React developer crafting responsive, AI-enhanced web solutions 
              for businesses and creators. Let's create something extraordinary together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Explore My Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 rounded-2xl"></div>
              <div className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-80" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
              }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full"
                ></motion.div>
              </div>
            </div>
            
            {/* Floating Code Icon */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-cyan-500 rounded-full p-4 shadow-lg shadow-cyan-500/25"
            >
              <Code className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
