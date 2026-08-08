import React from 'react';
import { Search, Lock, RefreshCw, Cpu, Code2, Database } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Search, title: "Multi-Signal Reputation", desc: "Evaluates package age, download spikes, author domain history, and CVE records." },
    { icon: Lock, title: "Zero LLM Modification", desc: "Operates entirely as a pre-install wrapper without needing model fine-tuning or prompt rewrites." },
    { icon: RefreshCw, title: "Autonomous Recovery Analysis", desc: "Prompts AI agents with interception warnings to test automated alternative resolution." },
    { icon: Cpu, title: "Docker Sandbox Isolation", desc: "Runs risky dependencies inside isolated containers before committing to local environments." },
    { icon: Code2, title: "Multi-Ecosystem Support", desc: "Built for npm, PyPI, and custom registry dependency interception." },
    { icon: Database, title: "Structured Security Signals", desc: "Outputs real-time JSON logs compatible with SIEM and frontend telemetry dashboards." },
  ];

  return (
    <section id="features" className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase font-bold text-accentGreen tracking-widest mb-3">Capabilities</h2>
        <p className="text-3xl font-bold text-white">Security Layer Capabilities</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-xl hover:border-emerald-500/30 transition">
            <f.icon className="w-7 h-7 text-emerald-400 mb-4" />
            <h3 className="font-bold text-white text-base mb-2">{f.title}</h3>
            <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}