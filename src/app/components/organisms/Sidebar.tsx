import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaCode } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-blue-900 text-white shadow-md p-6 overflow-y-auto">
      {/* Información personal */}
      <div className="mb-8 text-center">
        <img
          src="/danielcetinaprofile.jpg"
          alt="Daniel Cetina"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-600"
        />
        <h2 className="text-xl font-semibold">Daniel Cetina</h2>
        <p className="text-blue-300">Mobile Developer</p>
      </div>

      {/* Datos de contacto */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Contacto</h3>
        <ul>
          <li className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> Bello
          </li>
          <li className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" /> +57 3012221852
          </li>
          <li className="flex items-center">
            <FaEnvelope className="mr-2" /> danielcetina@gmail.com
          </li>
        </ul>
      </div>

      {/* Idiomas */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Idiomas</h3>
        <ul>
          <li className="flex items-center mb-2">
            <FaLanguage className="mr-2" /> Inglés: 65%
          </li>
          <li className="flex items-center">
            <FaLanguage className="mr-2" /> Español: 100%
          </li>
        </ul>
      </div>

      {/* Lenguajes de programación */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Lenguajes de Programación</h3>
        <ul>
          <li className="flex items-center mb-2">
            <FaCode className="mr-2" /> Kotlin: 70%
          </li>
          <li className="flex items-center mb-2">
            <FaCode className="mr-2" /> TypeScript: 40%
          </li>
          <li className="flex items-center">
            <FaCode className="mr-2" /> Python: 20%
          </li>
        </ul>
      </div>

      {/* Habilidades extra */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Habilidades Extra</h3>
        <ul>
          <li className="mb-2">Trabajo en equipo</li>
          <li className="mb-2">Resolución de problemas</li>
          <li>Comunicación efectiva</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
