import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import HeartForm from "./HeartForm";

const Background = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white min-h-screen flex flex-col bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${
          scrolled
            ? "bg-zinc-900/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 h-20">
          {/* Logo Section */}
          <div className="text-2xl font-semibold flex gap-2 items-center">
            <div
              className={`p-2 rounded-xl transition-all duration-500 ${
                scrolled ? "bg-green-500/10" : "bg-green-500/20"
              }`}
            >
              <Heart
                className={`h-8 w-8 transition-all duration-500 ${
                  scrolled ? "text-green-400" : "text-green-500 animate-pulse"
                }`}
              />
            </div>
            <p
              className={`transition-all duration-500 ${
                scrolled ? "text-green-400" : "underline text-white"
              }`}
            >
              HeartPredict
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
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 mdspace-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Heart Disease Prediction App
          </div>
          <div className="text-sm text-center text-gray-300">
            Made by <span className="font-semibold text-green-400">Kapil Singh</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 text-sm text-gray-400">
            <a
              href="https://github.com/kapilsingh09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="inline-block"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.227 0 1.607-.015 2.903-.015 3.293 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Background;
