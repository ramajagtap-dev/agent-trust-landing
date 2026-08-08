import React, { useState, useEffect } from 'react';
import { ShieldAlert, Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section spy
      const sections = ['problem', 'how-it-works', 'features', 'benchmarks', 'get-started'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/85 border-b border-gray-800/60">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
            <ShieldAlert className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            AgentTrust<span className="text-emerald-400">.ai</span>
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          {[
            { id: 'problem', name: 'The Problem' },
            { id: 'how-it-works', name: 'How It Works' },
            { id: 'features', name: 'Capabilities' },
            { id: 'benchmarks', name: 'Benchmarks' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors duration-200 hover:text-emerald-400 ${
                activeSection === link.id ? 'text-emerald-400 font-semibold border-b-2 border-emerald-400 pb-1' : ''
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          {/* SVG GitHub Icon */}
          <a
            href="https://github.com/ramajagtap-dev/agent-trust-landing"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repository"
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg border border-gray-800 hover:border-gray-700 bg-gray-900/50"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200 shadow-glow-green"
          >
            <Terminal className="w-4 h-4 mr-2" />
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}