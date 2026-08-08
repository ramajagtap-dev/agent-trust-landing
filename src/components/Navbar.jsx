import React, { useState, useEffect } from 'react';
import { ShieldAlert, Terminal, Github, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Progress Bar Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Active Section Spy
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
      {/* Top Scroll Progress Indicator */}
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

        {/* CTA Button */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/ramajagtap-dev/agent-trust-landing"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg border border-gray-800 hover:border-gray-700"
          >
            <Github className="w-5 h-5" />
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