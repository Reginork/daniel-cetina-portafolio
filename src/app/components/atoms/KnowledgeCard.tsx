"use client";

import React from 'react';
import { IconType } from 'react-icons';

interface KnowledgeCardProps {
  title: string;
  description: string;
  Icon: IconType;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center">
      <Icon className="text-blue-600 w-12 h-12 mb-2" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default KnowledgeCard;
