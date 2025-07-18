
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              Musungu Samora
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-cyan-400 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-cyan-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-gray-700"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-[calc(100vh-4rem)]"
      >
        <Outlet />
      </motion.main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-cyan-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Musungu Samora. Built with React, Tailwind CSS, and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
