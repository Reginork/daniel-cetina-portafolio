"use client";

import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'; // Importa los íconos de FontAwesome

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed right-0 top-1/3 z-10">
      <div className="bg-white shadow-lg p-4 rounded-l-lg">
        <ul className="space-y-4">
          <li>
            <a href="https://github.com/daniel-cetina" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black hover:text-gray-700 transition-colors text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/dancetina" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-blue-600 hover:text-blue-800 transition-colors text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialSidebar;
