import React from 'react';
import { AlertOctagon, Flame, ShieldOff } from 'lucide-react';

export default function Problem() {
  const risks = [
    {
      icon: Flame,
      title: "Temperature vs. Hallucinations",
      desc: "Higher creative parameters (Temperature ↑) in code generation models directly increase hallucination rates of non-existent packages."
    },
    {
      icon: AlertOctagon,
      title: "Slopsquatting & Typosquatting",
      desc: "Attackers register hallucinated package names on npm/pip registries, turning AI suggestions into automated malware execution."
    },
    {
      icon: ShieldOff,
      title: "Unchecked Execution",
      desc: "Coding agents like Claude Code, Cursor, and Copilot run terminal installation commands without evaluating maintainer trust or CVE history."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold text-accentRed tracking-widest mb-3">The Problem Context</h2>
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">AI can write code. Can it trust what it installs?</p>
          <p className="text-gray-400 text-sm md:text-base">
            Existing work quantifies hallucination frequency in open-loop responses. Our framework addresses the actual security vector: automated dependency execution in real-world environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {risks.map((item, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-red-500/40 transition">
              <item.icon className="w-8 h-8 text-accentRed mb-4" />
              <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}