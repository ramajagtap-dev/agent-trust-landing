import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export default function GetStarted() {
  const [copied, setCopied] = useState(false);
  const command = "npm install -g @agenttrust/security-wrapper";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="py-20 bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start Securing Your AI Coding Agents</h2>
        <p className="text-gray-400 text-sm mb-8">Install the CLI wrapper to protect local environments against package hallucinations.</p>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl max-w-xl mx-auto flex items-center justify-between font-mono text-xs sm:text-sm text-emerald-400 shadow-xl">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Terminal className="w-4 h-4 text-gray-500 shrink-0" />
            <span>{command}</span>
          </div>
          <button onClick={handleCopy} className="ml-4 p-2 bg-slate-800 hover:bg-slate-700 rounded text-gray-300 transition shrink-0">
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}