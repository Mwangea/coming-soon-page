import React from 'react';
import { handleFormSubmit } from '../utils/form';

export function NewsletterForm() {
  return (
    <div className="mt-16 max-w-md mx-auto">
      <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm border border-gray-700">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Get Notified When We Launch
        </h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 py-2 px-4 rounded font-semibold hover:bg-yellow-300 transition duration-300"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}