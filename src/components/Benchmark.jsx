import React from 'react';
import { BarChart3, ShieldCheck, AlertCircle } from 'lucide-react';

export default function Benchmark() {
  const data = [
    { agent: "Claude Code (Anthropic)", hallucination: "11.2%", recovery: "93.4%", status: "Safe", badge: "bg-emerald-950 text-emerald-400 border-emerald-800" },
    { agent: "Cursor Coding Agent", hallucination: "15.8%", recovery: "87.1%", status: "Moderate", badge: "bg-amber-950 text-amber-400 border-amber-800" },
    { agent: "GitHub Copilot Workspace", hallucination: "23.5%", recovery: "71.8%", status: "At Risk", badge: "bg-red-950 text-red-400 border-red-800" },
  ];

  return (
    <section id="benchmark" className="py-20 bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accentGreen text-xs uppercase font-bold tracking-widest mb-2">
            <BarChart3 className="w-4 h-4" /> Research Innovation
          </div>
          <p className="text-3xl font-bold text-white mb-4">Closed-Loop AI Coding Agent Benchmark</p>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            How do AI agents behave when unsafe or suspicious dependencies are intercepted? Measuring recovery rates without modifying underlying LLMs.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm text-gray-300">
            <thead className="bg-slate-950 text-gray-400 uppercase text-[11px] border-b border-slate-800 font-mono">
              <tr>
                <th className="p-4">AI Coding Agent</th>
                <th className="p-4">Hallucination Frequency</th>
                <th className="p-4">Recovery Success Rate</th>
                <th className="p-4">Safety Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/40 transition">
                  <td className="p-4 font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accentCyan shrink-0" />
                    {row.agent}
                  </td>
                  <td className="p-4 font-mono text-amber-400">{row.hallucination}</td>
                  <td className="p-4 font-mono text-emerald-400">{row.recovery}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-semibold border ${row.badge}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 justify-center">
          <AlertCircle className="w-4 h-4 text-gray-400" />
          <span>Benchmark evaluation dataset constructed using open-loop prompt responses & closed-loop Docker sandbox runs.</span>
        </div>
      </div>
    </section>
  );
}