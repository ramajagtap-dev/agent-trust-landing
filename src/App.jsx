import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Benchmark from './components/Benchmark';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Problem Context */}
      <section id="problem">
        <Problem />
      </section>

      {/* 3. How It Works / Architecture */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* 4. Security Capabilities (With Dominant Trust Score Panel) */}
      <section id="features">
        <Features />
      </section>

      {/* 5. Closed-Loop Agent Benchmarks */}
      <section id="benchmarks">
        <Benchmark />
      </section>

      {/* 6. Get Started (CLI & Integration Steps) */}
      <section id="get-started">
        <GetStarted />
      </section>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}