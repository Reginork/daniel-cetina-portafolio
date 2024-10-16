"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>Derechos reservados © {new Date().getFullYear()} Daniel Cetina</p>
      <p>Conéctate conmigo en <a href="https://linkedin.com/in/dancetina" className="text-blue-400 hover:text-blue-300">LinkedIn</a>.</p>
    </footer>
  );
};

export default Footer;
