import React from 'react';
import type { LayoutProps } from '../types';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10" 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {children}
        </div>
      </div>
    </div>
  );
}