import React from 'react';
import { Heart } from 'lucide-react';
import HeartForm from './HeartForm';

const Background = () => {
  return (
    <div className='text-white min-h-screen flex flex-col'>
      {/* Navbar */}
      <nav className="bg-zinc-900 text-white border-b-2 border-white/20 h-20 w-full flex items-center justify-between px-6 md:px-12  py-2 md:py-0">
        {/* Logo Section */}
        <div className="text-2xl font-semibold flex gap-2 items-center mb-2 md:mb-0">
          <Heart className='h-8 w-8 text-green-500'  />
          <p className='underline'>Miss waguri</p>
        </div>

        {/* Profile Image */}
        <div className="h-16 w-16 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover object-center"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-12 py-6">
        <HeartForm />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white border-t-2 border-white/20 py-6 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 space-y-4 md:space-y-0">
          {/* Left section */}
          <div className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Heart Disease Prediction App. All rights reserved.
          </div>

          {/* Middle section */}
          <div className="text-sm text-center">
            Made by <span className="font-semibold">Kapil Singh</span>
          </div>

          {/* Right section - optional links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 text-sm">
            <a href="https://github.com/kapilsingh09" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Background;
