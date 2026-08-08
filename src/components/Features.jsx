import React from 'react';
import { Shield, Layers, Lock, Cpu, CheckCircle, XCircle } from 'lucide-react';

export default function Features() {
  return (
    <div className="py-20 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Research Scope & Features
          </span>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-3">
            Multi-Signal Trust Engine & Sandbox
          </h2>
          <p className="mt-4 text-gray-400">
            Pre-execution dependency evaluation framework paired with containerized execution boundary.
          </p>
        </div>

        {/* Central Trust Score Panel */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-gray-900 to-[#0F172A] border border-gray-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-sm font-medium">
                <Shield className="w-5 h-5" />
                <span>Multi-Signal Trust Scoring Engine</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Evaluates packages before terminal execution</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Combines package age, maintainer reputation, typosquatting vectors, CVE history, and download activity signals to calculate a deterministic Trust Score before package installation.
              </p>
            </div>

            {/* Score Display Card */}
            <div className="w-full lg:w-80 bg-[#0B0F17] p-5 rounded-xl border border-gray-800 space-y-3">
              <div className="flex justify-between text-xs font-mono text-gray-400">
                <span>EVALUATED PACKAGE</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
              <div className="text-sm font-mono text-white">express-validator</div>
              
              {/* Progress bars */}
              <div className="space-y-2 pt-2 text-xs">
                <div>
                  <div className="flex justify-between text-gray-400 mb-1"><span>Package Age</span><span>92/100</span></div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '92%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-400 mb-1"><span>Maintainer Reputation</span><span>84/100</span></div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '84%'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-gray-400 mb-1"><span>Typosquatting Risk</span><span>98/100 (Safe)</span></div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-emerald-400 h-1.5 rounded-full" style={{width: '98%'}}></div></div>
                </div>
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
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why AgentTrust? Research Position</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300 rounded-xl border border-gray-800 bg-gray-900/50">
              <thead className="bg-gray-800/80 text-gray-400 text-xs uppercase">
                <tr>
                  <th className="p-4">Capability Dimension</th>
                  <th className="p-4">Static Scanners (e.g. Snyk, Socket)</th>
                  <th className="p-4 text-emerald-400">AgentTrust Framework</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-white">Execution Interception Boundary</td>
                  <td className="p-4 text-gray-400 flex items-center gap-2"><XCircle className="w-4 h-4 text-rose-500 shrink-0"/> Post-generation / CI-CD pipeline scan</td>
                  <td className="p-4 text-emerald-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0"/> Real-time pre-install terminal intercept</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Closed-Loop Agent Feedback</td>
                  <td className="p-4 text-gray-400 flex items-center gap-2"><XCircle className="w-4 h-4 text-rose-500 shrink-0"/> Static alert report for human review</td>
                  <td className="p-4 text-emerald-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0"/> Feeds interception context back to agent to trigger safe recovery</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Agent Recovery Benchmarking</td>
                  <td className="p-4 text-gray-400 flex items-center gap-2"><XCircle className="w-4 h-4 text-rose-500 shrink-0"/> Not measured</td>
                  <td className="p-4 text-emerald-300 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400 shrink-0"/> Quantifies agent hallucination & recovery rates in sandbox</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}