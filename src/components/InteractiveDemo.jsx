import React, { useState } from 'react';
import { Info, CheckCircle, XCircle } from 'lucide-react';

const ECOSYSTEM_DATA = {
  npm: {
    safe: {
      name: 'zod',
      label: 'zod',
      badge: 'Verified Baseline',
      command: 'install zod',
      score: 96,
      action: 'ALLOW',
      strategy: 'EXECUTE_INSTALL',
      details: {
        age: '4+ Yrs',
        maintainer: 'High Trust (Verified)',
        typosquat: 'Safe',
        cve: '0 Detected',
      },
      message: '[DECISION: ALLOW] Trust Score: 96/100. Package verified. Proceeding with execution boundary pass.',
    },
    suspicious: {
      name: 'event-stream-patch',
      label: 'event-stream-patch',
      badge: 'Decoy Scenario',
      command: 'install event-stream-patch',
      score: 24,
      action: 'BLOCK',
      strategy: 'TRIGGER_RECOVERY',
      details: {
        age: '2 Days',
        maintainer: 'Unknown / Low Reputation',
        typosquat: 'Suspicious Similarity to "event-stream"',
        cve: 'High Risk Signature',
      },
      message: '[DECISION: BLOCK] Trust Score: 24/100. Potential supply chain threat. Intercepted before shell execution.',
    },
  },
  PyPI: {
    safe: {
      name: 'pydantic',
      label: 'pydantic',
      badge: 'Verified Baseline',
      command: 'pip install pydantic',
      score: 98,
      action: 'ALLOW',
      strategy: 'EXECUTE_INSTALL',
      details: {
        age: '6+ Yrs',
        maintainer: 'Core Maintainer Team',
        typosquat: 'Safe',
        cve: '0 Detected',
      },
      message: '[DECISION: ALLOW] Trust Score: 98/100. Verified PyPI package.',
    },
    suspicious: {
      name: 'reqeusts',
      label: 'reqeusts',
      badge: 'Decoy Scenario',
      command: 'pip install reqeusts',
      score: 12,
      action: 'BLOCK',
      strategy: 'TRIGGER_RECOVERY',
      details: {
        age: '1 Day',
        maintainer: 'Unverified Account',
        typosquat: 'High Typosquatting Risk ("requests")',
        cve: 'Malicious Pattern Detected',
      },
      message: '[DECISION: BLOCK] Trust Score: 12/100. Typosquatting attack intercepted.',
    },
  },
  'Crates.io': {
    safe: {
      name: 'tokio',
      label: 'tokio',
      badge: 'Verified Baseline',
      command: 'cargo add tokio',
      score: 99,
      action: 'ALLOW',
      strategy: 'EXECUTE_INSTALL',
      details: {
        age: '6+ Yrs',
        maintainer: 'Official Tokio Team',
        typosquat: 'Safe',
        cve: '0 Detected',
      },
      message: '[DECISION: ALLOW] Trust Score: 99/100. Verified Rust crate.',
    },
    suspicious: {
      name: 'tokio-net-decoy',
      label: 'tokio-net-decoy',
      badge: 'Decoy Scenario',
      command: 'cargo add tokio-net-decoy',
      score: 31,
      action: 'BLOCK',
      strategy: 'TRIGGER_RECOVERY',
      details: {
        age: '3 Days',
        maintainer: 'Unconfirmed Community Vector',
        typosquat: 'Namespace Ambiguity Vector',
        cve: 'Unverified Source',
      },
      message: '[DECISION: BLOCK] Trust Score: 31/100. Ambiguous crate intercepted.',
    },
  },
};

export default function InteractiveDemo({ isDarkMode = true }) {
  const [selectedEco, setSelectedEco] = useState('npm');
  const [packageType, setPackageType] = useState('safe');

  const currentEco = ECOSYSTEM_DATA[selectedEco] || ECOSYSTEM_DATA.npm;
  const currentData = currentEco[packageType] || currentEco.safe;

  const isAllowed = currentData.action === 'ALLOW';

  const theme = {
    wrapperBg: isDarkMode
      ? 'bg-[#0B0F17] border-slate-800/80 text-white'
      : 'bg-slate-50 border-slate-200 text-slate-900',
    titleText: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-gray-400' : 'text-slate-600',
    cardBg: isDarkMode ? 'bg-[#0E1526] border-slate-800' : 'bg-white border-slate-200',
  };

  return (
    <div className={`py-16 sm:py-20 border-t transition-colors duration-300 ${theme.wrapperBg}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20 inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" />
            Conceptual Interceptor Demo
          </span>
          
          <h2 className={`text-2xl sm:text-3xl font-extrabold mt-3 ${theme.titleText}`}>
            Interactive Security Interception Simulation
          </h2>
          
          <p className={`text-xs sm:text-sm mt-2 ${theme.subText}`}>
            Select an ecosystem and a benchmark scenario to observe real-time signal analysis, trust evaluation, and closed-loop decision strategies.
          </p>
        </div>

        {/* Playground Container */}
        <div className={`p-6 sm:p-8 rounded-2xl border shadow-2xl ${theme.cardBg}`}>
          
          {/* 1. Ecosystem Selection Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-800/80">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0">
              <span className="text-xs font-mono text-gray-400 uppercase mr-2">Ecosystem:</span>
              {Object.keys(ECOSYSTEM_DATA).map((eco) => (
                <button
                  key={eco}
                  onClick={() => setSelectedEco(eco)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedEco === eco
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold'
                      : 'bg-gray-900/60 text-gray-400 hover:text-white border border-gray-800'
                  }`}
                >
                  {eco}
                </button>
              ))}
            </div>

            {/* Disclaimer Tag */}
            <span className="text-[11px] font-mono text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
              Frontend Simulation Interface
            </span>
          </div>

          {/* 2. Package / Scenario Selector */}
          <div className="my-6 flex items-center gap-3">
            <span className="text-xs font-mono text-gray-400 uppercase">Select Scenario:</span>
            
            <button
              onClick={() => setPackageType('safe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
                packageType === 'safe'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                  : 'bg-gray-900/40 text-gray-400 border border-gray-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {currentEco.safe.name} ({currentEco.safe.badge})
            </button>

            <button
              onClick={() => setPackageType('suspicious')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
                packageType === 'suspicious'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 font-semibold'
                  : 'bg-gray-900/40 text-gray-400 border border-gray-800'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              {currentEco.suspicious.name} ({currentEco.suspicious.badge})
            </button>
          </div>

          {/* 3. Terminal Log & Trust Score Output Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Terminal Window */}
            <div className="lg:col-span-2 bg-[#070A11] border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-gray-500 pb-2 border-b border-gray-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-gray-400">PACT Interceptor CLI Simulation</span>
                </div>
                <span>{selectedEco}</span>
              </div>

              <div className="text-emerald-400 flex items-center gap-2 pt-1">
                <span className="text-gray-500">$</span>
                <span>{currentData.command}</span>
              </div>

              <div className="text-gray-400 space-y-1 pl-3 border-l border-gray-800 text-[11px]">
                <p className="text-amber-400/90 font-semibold">🔍 Intercepting command... Fetching multi-signal trust vectors</p>
                <p>• Age Signal: <span className="text-gray-200">{currentData.details.age}</span></p>
                <p>• Maintainer Signal: <span className="text-gray-200">{currentData.details.maintainer}</span></p>
                <p>• Typosquat Vector: <span className="text-gray-200">{currentData.details.typosquat}</span></p>
                <p>• Vulnerability Scan: <span className="text-gray-200">{currentData.details.cve}</span></p>
              </div>

              <div className={`p-3 rounded-lg border text-xs font-semibold mt-3 ${
                isAllowed
                  ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400'
                  : 'bg-rose-950/40 border-rose-800/60 text-rose-400'
              }`}>
                {currentData.message}
              </div>
            </div>

            {/* Score & Strategy Panel */}
            <div className="space-y-4 flex flex-col justify-between">
              
              {/* Trust Score Box */}
              <div className="bg-[#070A11] border border-slate-800 rounded-xl p-4 text-center">
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase">Evaluation Score</span>
                <div className="text-4xl font-extrabold font-mono mt-1 mb-1">
                  <span className={currentData.score > 70 ? 'text-emerald-400' : 'text-rose-400'}>
                    {currentData.score}
                  </span>
                  <span className="text-gray-600 text-lg"> / 100</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5 mt-2">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentData.score > 70 ? 'bg-emerald-400' : 'bg-rose-500'}`} 
                    style={{ width: `${currentData.score}%` }}
                  />
                </div>
              </div>

              {/* Action Strategy Box */}
              <div className="bg-[#070A11] border border-slate-800 rounded-xl p-4 space-y-2">
                <span className="text-[10px] font-mono text-gray-400 tracking-wider uppercase">PACT Action Strategy</span>
                <div className="flex items-center gap-2 font-mono text-xs font-bold">
                  {isAllowed ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">EXECUTE_INSTALL</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span className="text-rose-400">TRIGGER_CLOSED_LOOP_RECOVERY</span>
                    </>
                  )}
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  {isAllowed 
                    ? 'Command permitted to pass execution boundary into environment.' 
                    : 'Execution intercepted. Safety feedback vector returned to LLM agent.'}
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}