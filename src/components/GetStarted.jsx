import React, { useState } from 'react';
import { Copy, Check, Terminal, GitBranch } from 'lucide-react';

const INSTALL_COMMANDS = {
  repo: 'git clone https://github.com/agent-trust/pact-framework.git',
  cli: 'pip install pact-bench',
};

export default function GetStarted({ isDarkMode = true }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('repo');

  const currentCommand = INSTALL_COMMANDS[activeTab];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for clipboard interaction if needed
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCopied(false);
  };

  const theme = {
    sectionBg: isDarkMode
      ? 'bg-slate-950/90 border-slate-800/80 text-white'
      : 'bg-slate-100 border-slate-200 text-slate-900',
    titleText: isDarkMode ? 'text-white' : 'text-slate-900',
    subText: isDarkMode ? 'text-gray-400' : 'text-slate-600',
    cardBg: isDarkMode ? 'bg-[#0E1526] border-slate-800' : 'bg-white border-slate-200',
    inactiveTab: isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900',
  };

  return (
    <section id="get-started" className={`py-16 sm:py-20 border-t transition-colors duration-300 ${theme.sectionBg}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Badge & Header */}
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          Get Started
        </span>
        
        <h2 className={`text-2xl sm:text-3xl font-extrabold mt-3 mb-3 ${theme.titleText}`}>
          Evaluate & Secure Your Agents
        </h2>
        
        <p className={`text-xs sm:text-sm mb-6 max-w-lg mx-auto ${theme.subText}`}>
          Clone the PACT research repository or install the benchmark toolkit to run local execution evaluations.
        </p>

        {/* Command Box Container */}
        <div className={`p-4 sm:p-6 rounded-2xl border max-w-xl mx-auto shadow-2xl ${theme.cardBg}`}>
          
          {/* Tab Selector */}
          <div className="flex justify-center gap-2 mb-4 border-b border-gray-800/60 pb-3">
            <button
              onClick={() => handleTabChange('repo')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'repo'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                  : theme.inactiveTab
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>PACT Framework Repo</span>
            </button>
            
            <button
              onClick={() => handleTabChange('cli')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                activeTab === 'cli'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-semibold'
                  : theme.inactiveTab
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Benchmark Toolkit</span>
            </button>
          </div>

          {/* Terminal Command Display */}
          <div className="bg-[#070A11] border border-slate-800/90 p-3 rounded-xl flex items-center justify-between font-mono text-xs text-emerald-400 shadow-inner gap-2 overflow-hidden">
            
            <div className="flex items-center gap-2 min-w-0 overflow-x-auto scrollbar-none py-1">
              <span className="text-gray-500 shrink-0">$</span>
              <span className="whitespace-nowrap text-gray-200">{currentCommand}</span>
            </div>
            
            <button 
              onClick={handleCopy} 
              className="px-3 py-1.5 bg-slate-800 hover:bg-emerald-500/20 rounded-lg text-gray-300 hover:text-emerald-400 border border-slate-700/60 transition-all shrink-0 flex items-center gap-1.5 active:scale-95"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] text-emerald-400 font-semibold hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px] hidden sm:inline">Copy</span>
                </>
              )}
            </button>
            
          </div>

        </div>

      </div>
    </section>
  );
}