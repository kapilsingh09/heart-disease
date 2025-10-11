import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import HeartForm from './HeartForm';

const Background = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${
          scrolled
            ? 'bg-zinc-900/80 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          {/* Logo Section */}
          <div className="text-2xl font-semibold flex gap-2 items-center">
            <div
              className={`p-2 rounded-xl transition-all duration-500 ${
                scrolled ? 'bg-green-500/10' : 'bg-green-500/20'
              }`}
            >
              <Heart
                className={`h-8 w-8 transition-all duration-500 ${
                  scrolled ? 'text-green-400' : 'text-green-500 animate-pulse'
                }`}
              />
            </div>
            <p
              className={`transition-all duration-500 ${
                scrolled ? 'text-green-400' : 'underline text-white'
              }`}
            >
              Miss Waguri
            </p>
          </div>

          {/* Profile Image */}
          <div className="h-14 w-14 rounded-full overflow-hidden ring-2 ring-green-500/40 hover:ring-green-400 transition-all duration-500 shadow-md">
            <img
              className="h-full w-full object-cover object-center"
              src="/profile.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-12 py-6 pt-24 transition-all duration-700">
        <HeartForm />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900/90 text-white border-t border-white/10 py-6 mt-12 backdrop-blur-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-4 md:space-y-0">
          {/* Left section */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Heart Disease Prediction App. All rights reserved.
          </div>

          {/* Middle section */}
          <div className="text-sm text-center text-gray-300">
            Made by <span className="font-semibold text-green-400">Kapil Singh</span>
          </div>

          {/* Right section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-sm text-gray-400">
            <a href="https://github.com/kapilsingh09" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Background;
