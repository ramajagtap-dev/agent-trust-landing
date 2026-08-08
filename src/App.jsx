import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Benchmark from './components/Benchmark';
import Features from './components/Features';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-darkBg text-gray-100 selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benchmark />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}