"use client";

import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import KnowledgeCard from '../atoms/KnowledgeCard';
import EducationCard from '../atoms/EducationCard';
import PortfolioCard from '../atoms/PortfolioCard';
import Footer from '../atoms/Footer';
import SocialSidebar from '../atoms/SocialSidebar';



const MainContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{ title: string; description: string; image: string } | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLearnMore = (project: { title: string; description: string; image: string }) => {
    setSelectedProject(project);
    toggleModal();
  };

  return (
    <div className="ml-64 p-8 bg-gray-50 h-full overflow-y-auto">
      <SocialSidebar />

      {/* Perfil */}
      <section className="mb-8 p-6 bg-white shadow-md rounded-lg flex flex-col sm:flex-row items-center">
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-3xl font-semibold mb-4">Daniel Cetina</h2>
          <p className="text-gray-600">
            Soy un desarrollador mobile con experiencia en Kotlin, React y diseño de interfaces de usuario.
            Me apasiona la tecnología y el aprendizaje continuo.
          </p>
          <button
            onClick={toggleModal}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ver más
          </button>
        </div>
        <div className="sm:w-1/2 flex justify-center sm:justify-end mt-6 sm:mt-0">
          <img
            src="/danielcetinaprofile.jpg"
            alt="Daniel Cetina"
            className="w-64 h-auto rounded-lg border-4 border-blue-600"
          />
        </div>
      </section>

      {/* Conocimientos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conocimientos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <KnowledgeCard
            title="React"
            description="Experiencia en la creación de interfaces dinámicas con React y sus ecosistemas."
            Icon={FaReact}
          />
          <KnowledgeCard
            title="Node.js"
            description="Desarrollo de aplicaciones backend y APIs con Node.js y Express."
            Icon={FaNodeJs}
          />
          <KnowledgeCard
            title="Bases de Datos"
            description="Conocimiento en bases de datos SQL y NoSQL."
            Icon={FaDatabase}
          />
        </div>
      </section>

      {/* Educación */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Educación</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EducationCard
            institution="Universidad De Antioquia"
            degree="Ingeniería de Sistemas"
            dates="2016 - Actualidad"
            description="Estudios enfocados en el desarrollo de software y tecnologías de la información."
          />
          <EducationCard
            institution="Mercadolibre"
            degree="Bootcamp Desarrollo de aplicaciones Mobile"
            dates="2022"
            description="Curso intensivo en tecnologías Mobile y del ecosistema MELI."
          />
        </div>
      </section>

      {/* Portafolio */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Portafolio</h2>
        <div className="flex overflow-x-auto space-x-4">
          <PortfolioCard
            title="Budget App"
            description="Una aplicación para gestionar y controlar presupuestos personales."
            image="/budget.jpg" // Asegúrate de que esta es la ruta correcta
            onLearnMore={() => handleLearnMore({
              title: "Budget App",
              description: "Esta aplicación ayuda a los usuarios a administrar sus gastos y mantener un control sobre su presupuesto personal.",
              image: "/budget.jpg" // Confirmar que esta es la ruta correcta
            })}
          />
          <PortfolioCard
            title="Calculadora"
            description="Una calculadora interactiva construida con tecnologías web."
            image="/calculadora.png" // Asegúrate de que esta es la ruta correcta
            onLearnMore={() => handleLearnMore({
              title: "Calculadora",
              description: "Esta calculadora permite realizar operaciones básicas y complejas, ofreciendo una interfaz amigable al usuario.",
              image: "/calculadora.jpg" // Confirmar que esta es la ruta correcta
            })}
          />
          {/* Agrega más PortfolioCards según sea necesario */}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h3 className="text-xl font-semibold mb-4">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-40 object-cover rounded mb-4" />
            <p>{selectedProject.description}</p>
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainContent;
