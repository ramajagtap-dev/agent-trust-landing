import React from 'react';
import { ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-900 bg-darkBg text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 font-bold text-white text-sm">
          <ShieldAlert className="text-accentGreen w-5 h-5" />
          <span>AgentTrust.ai</span>
        </div>
        <p>© 2026 AgentTrust.ai — Practical Security Framework & Benchmarking Engine for AI-Driven Development.</p>
      </div>
    </footer>
  );
}