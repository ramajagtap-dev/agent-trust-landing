import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Benchmark from './components/Benchmark';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import InteractiveDemo from './components/InteractiveDemo';

// Static Data for Marquee Banner
const MARQUEE_ITEMS = [
  '📦 npm Registry', 
  '🐍 PyPI (Python)', 
  '🦀 Crates.io (Rust)', 
  '💎 RubyGems', 
  '☕ Apache Maven',
  '🤖 Claude Code',
  '⚡ Cursor CLI',
  '🛡️ GitHub Copilot'
];

// 🌊 Clean Single-Row Ecosystem Marquee Bar
function MarqueeBanner() {
  return (
    <div className="w-full py-4 bg-[#0D131F] border-y border-gray-800/80 overflow-x-auto scrollbar-none my-2">
      <div className="flex items-center justify-start sm:justify-center space-x-4 min-w-max px-6">
        {MARQUEE_ITEMS.map((item) => (
          <span 
            key={item} 
            className="px-3.5 py-1.5 rounded-full bg-gray-900/90 border border-gray-800 text-emerald-400 text-xs font-mono flex items-center gap-2 shrink-0 shadow-sm hover:border-emerald-500/50 transition-all cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#0B0F17] text-gray-100 selection:bg-emerald-500 selection:text-black' 
        : 'bg-slate-50 text-slate-900 selection:bg-emerald-400 selection:text-black'
    }`}>
      {/* Theme Toggle Button & Navbar */}
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* 1. Hero Section */}
      <Hero isDarkMode={isDarkMode} />

      {/* 2. The Problem Context */}
      <section id="problem">
        <Problem isDarkMode={isDarkMode} />
      </section>

      {/* 3. How PACT Works / Architecture */}
      <section id="how-it-works">
        <HowItWorks isDarkMode={isDarkMode} />
      </section>

      {/* 🎮 4. Interactive Demo Simulator (PACT Interceptor) */}
      <section id="interactive-demo">
        <InteractiveDemo isDarkMode={isDarkMode} />
      </section>

      {/* 🌊 Flowing Ecosystem Marquee Bar */}
      <MarqueeBanner />

      {/* 5. Security Capabilities */}
      <section id="features">
        <Features isDarkMode={isDarkMode} />
      </section>

      {/* 6. PACT Dataset / Benchmarks */}
      <section id="benchmarks">
        <Benchmark isDarkMode={isDarkMode} />
      </section>

      {/* 7. Get Started */}
      <section id="get-started">
        <GetStarted isDarkMode={isDarkMode} />
      </section>

      {/* 8. Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}