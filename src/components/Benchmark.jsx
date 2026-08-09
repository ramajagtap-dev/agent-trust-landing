import React from 'react';
import { BarChart2, Info } from 'lucide-react';

const BENCHMARK_METRICS = [
  {
    agent: 'Claude Code (Sandbox)',
    hallucinationRate: '11.2%',
    recoveryRate: '93.4%',
    riskLevel: 'Safe Recovery',
    status: 'safe',
  },
  {
    agent: 'Cursor CLI (Sandbox)',
    hallucinationRate: '15.8%',
    recoveryRate: '87.1%',
    riskLevel: 'Moderate Recovery',
    status: 'moderate',
  },
  {
    agent: 'GitHub Copilot (Sandbox)',
    hallucinationRate: '23.5%',
    recoveryRate: '71.8%',
    riskLevel: 'Unsafe Retry Risk',
    status: 'unsafe',
  },
];

const EXPERIMENTAL_VARIABLES = [
  { id: '01', title: 'LLM Temperature Settings (0.0 to 0.8)' },
  { id: '02', title: 'Ecosystems (npm, PyPI, Crates, RubyGems, Maven)' },
  { id: '03', title: 'Agent Action (Stop, Retry, Substitute)' },
];

const STATUS_STYLES = {
  safe: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  moderate: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  unsafe: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
};

export default function Benchmark() {
  return (
    <section className="py-20 bg-[#0D131F]/60 border-t border-b border-gray-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Research & Benchmarking</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Closed-Loop Agent Recovery Benchmark
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Evaluating how AI coding agents respond when hallucinated or untrusted package installation requests are intercepted in real time.
          </p>
        </div>

        {/* Methodology Note */}
        <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm flex items-start space-x-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-amber-200">Preliminary Benchmark Interface:</span> The metrics below represent illustrative execution runs from controlled sandbox experiments. Final empirical findings will be generated upon completion of full task-suite evaluation across diverse LLM temperature settings.
          </div>
        </div>

        {/* Metrics Table */}
        <div className="w-full overflow-x-auto rounded-2xl border border-gray-800 bg-[#0B0F17]/90 shadow-xl scrollbar-thin scrollbar-thumb-gray-700">
          <table className="w-full min-w-[650px] text-left text-sm text-gray-300">
            <thead className="bg-gray-900/80 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-800">
              <tr>
                <th scope="col" className="px-6 py-4 whitespace-nowrap">Tested AI Agent / Environment</th>
                <th scope="col" className="px-6 py-4 whitespace-nowrap">Hallucinated Package Frequency</th>
                <th scope="col" className="px-6 py-4 whitespace-nowrap">Closed-Loop Recovery Success Rate</th>
                <th scope="col" className="px-6 py-4 whitespace-nowrap">Intervention Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {BENCHMARK_METRICS.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white flex items-center space-x-2 whitespace-nowrap">
                    <span>{row.agent}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-cyan-400 whitespace-nowrap">
                    {row.hallucinationRate}
                  </td>
                  <td className="px-6 py-4 font-mono text-emerald-400 whitespace-nowrap">
                    {row.recoveryRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${STATUS_STYLES[row.status]}`}>
                      {row.riskLevel}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Experimental Variables */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {EXPERIMENTAL_VARIABLES.map((variable) => (
            <div key={variable.id} className="p-4 rounded-xl bg-gray-900/40 border border-gray-800">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Test Variable {variable.id}</span>
              <p className="text-sm font-semibold text-gray-200 mt-1">{variable.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}