import React from 'react';
import { Timer } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
        <span className="text-yellow-400">NursingStudentsHelp</span><span className="font-normal text-white">.us</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-300">
        Your Ultimate Resource for Nursing Education Success
      </p>
      <div className="flex items-center justify-center space-x-4 mb-12">
        <Timer className="w-6 h-6 text-yellow-400 animate-pulse" />
        <p className="text-lg">Launching Soon</p>
      </div>
    </div>
  );
}