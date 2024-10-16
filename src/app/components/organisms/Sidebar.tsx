import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-md p-6">
      {/* Información personal */}
      <div className="mb-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-center text-xl font-semibold">Daniel Cetina</h2>
        <p className="text-center text-gray-600">Frontend Developer</p>
      </div>
      
      {/* Datos de contacto */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Contacto</h3>
        <p>Ciudad: Ciudad de México</p>
        <p>Teléfono: +52 123456789</p>
        <p>Email: daniel@example.com</p>
      </div>
      
      {/* Idiomas */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
        <p>Inglés: 80%</p>
        <p>Español: 100%</p>
      </div>
      
      {/* Habilidades */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Habilidades</h3>
        <p>React: 90%</p>
        <p>TypeScript: 85%</p>
        <p>CSS: 80%</p>
      </div>
    </div>
  );
};

export default Sidebar;
