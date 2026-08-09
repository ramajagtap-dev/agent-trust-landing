import React from 'react';

const SUPPORTED_ECOSYSTEMS = [
  '📦 npm Registry', 
  '🐍 PyPI (Python)', 
  '🦀 Crates.io (Rust)', 
  '💎 RubyGems', 
  '☕ Apache Maven',
  '🤖 Claude Code',
  '⚡ Cursor CLI',
  '🛡️ GitHub Copilot'
];

export default function Marquee() {
  return (
    <div className="w-full py-4 bg-slate-900/60 border-y border-slate-800 overflow-hidden my-8">
      <div className="flex space-x-8 animate-pulse text-xs font-mono text-slate-400 justify-center flex-wrap gap-4">
        {SUPPORTED_ECOSYSTEMS.map((ecosystem) => (
          <span 
            key={ecosystem} 
            className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-emerald-400/90 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span>{ecosystem}</span>
          </span>
        ))}
      </div>
    </div>
  );
}