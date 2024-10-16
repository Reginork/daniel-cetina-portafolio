import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="ml-64 p-8">
      {/* Perfil */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Perfil</h2>
        <div className="flex items-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mr-4"
          />
          <p>
            Soy un desarrollador frontend con experiencia en React, TypeScript y
            diseño de interfaces de usuario.
          </p>
        </div>
      </section>

      {/* Conocimientos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conocimientos</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold">Desarrollo Web</h3>
            <p>Blog, comercio electrónico, aplicaciones web</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold">Diseño UI/UX</h3>
            <p>Diseño de aplicaciones móviles y sitios web</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold">Fotografía</h3>
            <p>Fotografía de producto y retratos</p>
          </div>
        </div>
      </section>

      {/* Educación */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educación</h2>
        <div className="bg-white p-4 shadow-md">
          <h3 className="text-lg font-semibold">Ingeniería en Sistemas</h3>
          <p>Universidad Nacional, 2015-2020</p>
          <p>Descripción breve de los estudios realizados.</p>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
