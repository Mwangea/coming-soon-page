import React from 'react';
import type { FeatureItem } from '../types';

export function Feature({ Icon, title, description }: FeatureItem) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
      <Icon className="w-10 h-10 text-yellow-400 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}