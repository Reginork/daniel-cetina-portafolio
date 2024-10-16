import React from 'react';
import Sidebar from '../components/organisms/Sidebar';
import MainContent from '../components/organisms/MainContent';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
