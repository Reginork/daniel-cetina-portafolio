"use client";

import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  onLearnMore: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image, onLearnMore }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <button
        onClick={onLearnMore}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Saber más
      </button>
    </div>
  );
};

export default PortfolioCard;
