import React from 'react';
import { Timer } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        <span className="text-yellow-400">NursingStudentsHelp</span>.us
      </h1>
      <p className="text-2xl md:text-3xl mb-8 text-gray-300">
        Your Ultimate Resource for Nursing Education Success
      </p>
      <div className="flex items-center justify-center space-x-4 mb-12">
        <Timer className="w-6 h-6 text-yellow-400 animate-pulse" />
        <p className="text-xl">Launching Soon</p>
      </div>
    </div>
  );
}