import React from 'react';
import { Shield, CheckCircle, XCircle } from 'lucide-react';

const EVALUATED_METRICS = [
  { label: 'Package Age', score: '92/100', width: '92%' },
  { label: 'Maintainer Reputation', score: '84/100', width: '84%' },
  { label: 'Typosquatting Risk', score: '98/100 (Safe)', width: '98%' },
];

const COMPARISON_ROWS = [
  {
    dimension: 'Execution Interception Boundary',
    staticScanners: 'Post-generation / CI-CD pipeline scan',
    agentTrust: 'Real-time pre-install terminal intercept',
  },
  {
    dimension: 'Closed-Loop Agent Feedback',
    staticScanners: 'Static alert report for human review',
    agentTrust: 'Feeds interception context back to agent to trigger safe recovery',
  },
  {
    dimension: 'Agent Recovery Benchmarking',
    staticScanners: 'Not measured',
    agentTrust: 'Quantifies agent hallucination & recovery rates in sandbox',
  },
];

export default function Features({ isDarkMode = true }) {
  const theme = {
    bgSection: isDarkMode ? 'bg-[#0B0F17]' : 'bg-slate-100',
    textTitle: isDarkMode ? 'text-white' : 'text-slate-900',
    textSub: isDarkMode ? 'text-gray-400' : 'text-slate-600',
    cardBg: isDarkMode
      ? 'bg-gradient-to-b from-gray-900 to-[#0F172A] border-gray-800'
      : 'bg-white border-slate-200 shadow-slate-200/50',
    scoreCardBg: isDarkMode ? 'bg-[#0B0F17] border-gray-800' : 'bg-slate-50 border-slate-200',
    tableBg: isDarkMode
      ? 'text-gray-300 border-gray-800 bg-gray-900/50'
      : 'text-slate-700 border-slate-200 bg-white',
    tableHeader: isDarkMode ? 'bg-gray-800/80 text-gray-400' : 'bg-slate-100 text-slate-600',
    tableDivide: isDarkMode ? 'divide-gray-800' : 'divide-slate-200',
  };

  return (
    <div className={`py-20 relative transition-colors duration-300 ${theme.bgSection}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Core Engine & Comparison
          </span>
          <h2 className={`text-3xl font-extrabold sm:text-4xl mt-3 ${theme.textTitle}`}>
            Multi-Signal Trust Engine & Sandbox
          </h2>
          <p className={`mt-4 ${theme.textSub}`}>
            Pre-execution dependency evaluation framework paired with containerized execution boundary.
          </p>
        </div>

        {/* Central Trust Score Panel */}
        <div className={`mb-16 p-6 sm:p-8 rounded-2xl border shadow-2xl ${theme.cardBg}`}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-sm font-medium">
                <Shield className="w-5 h-5" />
                <span>Multi-Signal Trust Scoring Engine</span>
              </div>
              <h3 className={`text-2xl font-bold ${theme.textTitle}`}>
                Evaluates packages before terminal execution
              </h3>
              <p className={`text-sm leading-relaxed ${theme.textSub}`}>
                Combines package age, maintainer reputation, typosquatting vectors, CVE history, and download activity signals to calculate a deterministic Trust Score before package installation.
              </p>
            </div>

            {/* Score Display Card */}
            <div className={`w-full lg:w-80 p-5 rounded-xl border space-y-3 ${theme.scoreCardBg}`}>
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>EVALUATED PACKAGE</span>
                <span className="text-emerald-400 font-bold">PASSED</span>
              </div>
              <div className={`text-sm font-mono font-bold ${theme.textTitle}`}>
                express-validator
              </div>
              
              {/* Progress bars */}
              <div className="space-y-2 pt-2 text-xs">
                {EVALUATED_METRICS.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex justify-between text-gray-400 mb-1">
                      <span>{metric.label}</span>
                      <span>{metric.score}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5">
                      <div
                        className="bg-emerald-400 h-1.5 rounded-full"
                        style={{ width: metric.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-800 flex justify-between items-center text-sm">
                <span className="text-gray-400">Final Trust Score</span>
                <span className="font-mono font-bold text-emerald-400 text-base">91 / 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why AgentTrust? Comparison Matrix */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 ${theme.textTitle}`}>
            Why AgentTrust? Research Position
          </h3>
          <div className="overflow-x-auto">
            <table className={`w-full text-left text-sm rounded-xl border ${theme.tableBg}`}>
              <thead className={`${theme.tableHeader} text-xs uppercase`}>
                <tr>
                  <th scope="col" className="p-4">Capability Dimension</th>
                  <th scope="col" className="p-4">Static Scanners (e.g. Snyk, Socket)</th>
                  <th scope="col" className="p-4 text-emerald-400 font-bold">AgentTrust Framework</th>
                </tr>
              </thead>
              <tbody className={`divide-y text-xs sm:text-sm ${theme.tableDivide}`}>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.dimension}>
                    <td className={`p-4 font-semibold ${theme.textTitle}`}>{row.dimension}</td>
                    <td className="p-4 text-gray-400 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>{row.staticScanners}</span>
                    </td>
                    <td className="p-4 text-emerald-400 flex items-center gap-2 font-medium">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.agentTrust}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}