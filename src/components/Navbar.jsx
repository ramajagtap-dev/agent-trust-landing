import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F17]/80 border-b border-gray-800/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
            <ShieldAlert className="w-6 h-6 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            AgentTrust<span className="text-emerald-400">.ai</span>
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#problem" className="hover:text-emerald-400 transition-colors">The Problem</a>
          <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it Works</a>
          <a href="#benchmarks" className="hover:text-emerald-400 transition-colors">Benchmarks</a>
          <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
        </nav>

        {/* CTA Button */}
        <div>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200 shadow-glow-green"
          >
            &gt;_ Get Started
          </a>
        </div>

      </div>
    </header>
  );
}