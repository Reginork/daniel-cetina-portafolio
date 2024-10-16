"use client";

import React from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  dates: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ institution, degree, dates, description }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold">{degree}</h3>
      <p className="text-gray-600">{institution}</p>
      <p className="text-gray-500">{dates}</p>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
};

export default EducationCard;
