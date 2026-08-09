import React from 'react';
import { ShieldCheck, Play, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const ACTION_DECISION_BADGES = [
  { label: 'ALLOW', style: 'bg-emerald-950/60 border-emerald-800 text-emerald-400' },
  { label: 'WARN', style: 'bg-amber-950/60 border-amber-800 text-amber-400' },
  { label: 'BLOCK', style: 'bg-red-950/60 border-red-800 text-red-400' },
];

export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto text-center">
      
      {/* Badge Header */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 text-xs font-medium mb-6 shadow-glow-green">
        <ShieldCheck className="w-4 h-4 shrink-0" />
        <span>Pre-Install Trust Layer & Benchmarking Framework</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
        Secure AI-Assisted Coding <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          Before Dependencies Enter Your Project
        </span>
      </h1>

      {/* Subtitle / Value Proposition */}
      <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
        A security layer that intercepts AI-generated dependency installation requests and evaluates package trust using multiple security and reputation signals.
      </p>

      {/* Primary Action CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
        <a 
          href="#benchmark" 
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition shadow-glow-green"
        >
          <span>Explore Benchmarks</span>
          <Play className="w-4 h-4 fill-black" />
        </a>
        <a 
          href="#how-it-works" 
          className="border border-slate-800 hover:border-slate-700 bg-slate-900/50 text-gray-300 font-medium px-6 py-3 rounded-lg transition"
        >
          View Workflow
        </a>
      </div>

      {/* Live Interception Console Simulation */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto text-left font-mono text-xs sm:text-sm">
        
        {/* Terminal Header Bar */}
        <div className="bg-slate-900/90 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="text-xs text-gray-400 ml-2">agent-trust-interceptor — execution log</span>
          </div>
          <span className="text-[10px] bg-red-950 text-red-400 border border-red-800/80 px-2 py-0.5 rounded uppercase font-bold">
            Benchmark Scenario Log
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-5 space-y-3 bg-slate-950/90">
          <p className="text-gray-400">
            <span className="text-emerald-400">$</span> cursor-agent install <span className="text-amber-300">package-hallucinator-lib</span>
          </p>
          
          <div className="p-3 bg-amber-950/30 border border-amber-800/50 rounded text-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-400 text-xs sm:text-sm">[ANALYSIS] Untrusted Package Detected</p>
              <p className="text-xs mt-0.5 text-gray-300">Age: 1 day • Typosquatting target: "popular-secure-lib" • Maintainer Score: Low</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-red-400 font-semibold text-xs sm:text-sm">
            <XCircle className="w-4 h-4 shrink-0" />
            <span>[ACTION] Installation Intercepted & Blocked</span>
          </div>
          
          <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>
              [CLOSED-LOOP RECOVERY] Agent switched to verified package: <span className="underline">popular-secure-lib</span>
            </span>
          </div>
        </div>
      </div>

      {/* Gateway Architecture Pipeline */}
      <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-3xl mx-auto text-xs font-semibold text-gray-400 items-center">
        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">🤖 AI Coding Agent</div>
        <div className="text-emerald-400 hidden sm:block">➔</div>
        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">🛡️ Interceptor</div>
        <div className="text-emerald-400 hidden sm:block">➔</div>
        <div className="p-2.5 bg-slate-900 border border-slate-800 rounded">⚡ Trust Engine</div>
      </div>

      {/* Action Decision Indicators */}
      <div className="flex justify-center gap-3 mt-4 text-[11px] font-mono">
        {ACTION_DECISION_BADGES.map((badge) => (
          <span 
            key={badge.label} 
            className={`px-3 py-1 rounded border ${badge.style}`}
          >
            {badge.label}
          </span>
        ))}
      </div>

    </section>
  );
}