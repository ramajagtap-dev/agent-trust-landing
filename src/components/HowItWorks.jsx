import React from 'react';
import { Bot, Shield, Cpu, Sliders } from 'lucide-react';

const ARCHITECTURE_STEPS = [
  {
    icon: Bot,
    title: '1. Command Capture',
    desc: 'Docker sandbox/wrapper captures npm & pip commands issued by the AI Agent.',
  },
  {
    icon: Shield,
    title: '2. Signal Verification',
    desc: 'Trust Engine cross-checks age, download trends, typosquatting risk, & maintainer signals.',
  },
  {
    icon: Cpu,
    title: '3. Decision Enforcer',
    desc: 'Triggers ALLOW, WARN, or BLOCK before dependencies touch your environment.',
  },
  {
    icon: Sliders,
    title: '4. Closed-Loop Evaluation',
    desc: 'Measures agent recovery behavior and safe package re-selection upon interception.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 max-w-6xl mx-auto px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase font-bold text-accentCyan tracking-widest mb-3">
          Architecture
        </h2>
        <p className="text-3xl font-bold text-white mb-4">
          How The Pre-Install Trust Gateway Operates
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          Seamless security interception operating between autonomous coding agents and external package registries.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {ARCHITECTURE_STEPS.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.title}
              className="bg-slate-900/80 border border-slate-800 p-6 rounded-xl relative hover:border-accentCyan/50 transition shadow-lg flex flex-col justify-between"
            >
              <div>
                <IconComponent className="w-8 h-8 text-accentCyan mb-4" />
                <h3 className="font-bold text-base text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}