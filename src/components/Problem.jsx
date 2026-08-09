import React from 'react';
import { AlertOctagon, Flame, ShieldOff } from 'lucide-react';

const RISK_ITEMS = [
  {
    icon: Flame,
    title: 'Temperature vs. Hallucinations',
    desc: 'Higher creative parameters (Temperature ↑) in code generation models directly increase hallucination rates of non-existent packages.',
  },
  {
    icon: AlertOctagon,
    title: 'Slopsquatting & Typosquatting',
    desc: 'Attackers register hallucinated package names on npm/pip registries, turning AI suggestions into automated malware execution.',
  },
  {
    icon: ShieldOff,
    title: 'Unchecked Execution',
    desc: 'Coding agents like Claude Code, Cursor, and Copilot run terminal installation commands without evaluating maintainer trust or CVE history.',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold text-red-400 tracking-widest mb-3 inline-block">
            The Problem Context
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI can write code. Can it trust what it installs?
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Existing work quantifies hallucination frequency in open-loop responses. Our framework addresses the actual security vector: automated dependency execution in real-world environments.
          </p>
        </div>

        {/* Risk Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {RISK_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.title} 
                className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-red-500/40 transition-all duration-300"
              >
                <IconComponent className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}