import React from 'react';
import { Feature } from './Feature';
import { features } from '../data/features';

export function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}