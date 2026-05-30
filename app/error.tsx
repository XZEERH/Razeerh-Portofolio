// app/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-dark-900 text-white p-6 text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-4 glow-text">SYSTEM ERROR DETECTED</h2>
      <p className="text-white/70 mb-6">Website mengalami crash. Ini penyebab aslinya:</p>
      
      <div className="bg-red-950/50 p-6 rounded-xl border border-red-500/50 w-full max-w-2xl overflow-auto text-left shadow-[0_0_30px_rgba(255,0,0,0.3)]">
        <code className="text-sm text-red-200 font-mono">{error.message}</code>
      </div>

      <button 
        onClick={() => reset()} 
        className="mt-8 px-8 py-3 bg-neon-cyan text-dark-900 rounded-full font-bold hover:bg-white transition-colors"
      >
        Refresh Ulang
      </button>
    </div>
  );
}