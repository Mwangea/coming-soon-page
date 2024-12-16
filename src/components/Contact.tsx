import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="mt-16 text-center">
      <div className="flex items-center justify-center space-x-2">
        <Mail className="w-5 h-5 text-yellow-400" />
        <a
          href="mailto:support@nursingstudentshelp.us"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          support@nursingstudentshelp.us
        </a>
      </div>
    </div>
  );
}