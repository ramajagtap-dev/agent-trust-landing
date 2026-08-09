import React from 'react';

const SUPPORTED_ECOSYSTEMS = [
  'npm',
  'PyPI',
  'Crates.io',
  'RubyGems',
  'Maven',
  'Claude Code',
  'Cursor CLI',
  'Copilot',
];

export default function EcosystemsMarquee() {
  // Seamless continuous infinite marquee loop
  const marqueeItems = [...SUPPORTED_ECOSYSTEMS, ...SUPPORTED_ECOSYSTEMS];

  return (
    <div className="w-full py-6 bg-slate-900/50 dark:bg-slate-950 border-y border-slate-800 overflow-hidden relative">
      <div className="flex space-x-12 animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-slate-400 font-mono text-sm tracking-wider flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}