# Portafolio de Daniel Cetina

Este proyecto es un portafolio personal diseñado para mostrar habilidades y proyectos de desarrollo web de Daniel Cetina. Implementa un diseño responsivo utilizando Next.js y TailwindCSS, y presenta una estructura moderna y limpia.

## Características

- **Perfil Profesional**: Descripción breve del perfil profesional de Daniel.
- **Conocimientos**: Sección que muestra las tecnologías y herramientas con las que Daniel tiene experiencia.
- **Educación**: Historial educativo y certificaciones relevantes.
- **Portafolio**: Muestra una selección de proyectos destacados con detalles adicionales disponibles a través de un modal.
- **Menú Lateral de Redes Sociales**: Íconos fijos en el lado derecho que enlazan a las redes sociales y perfiles profesionales de Daniel.
- **Footer**: Incluye derechos de autor y una nota sobre la conectividad en redes sociales.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para producción.
- **TailwindCSS**: Framework de CSS para diseño responsivo y personalizado.
- **React Icons**: Biblioteca de iconos que se utiliza para agregar iconos de redes sociales.

## Estructura del Proyecto

- `components/`: Contiene todos los componentes reutilizables divididos en átomos y organismos.
  - `atoms/`: Componentes básicos como botones, tarjetas e íconos.
  - `organisms/`: Componentes que combinan varios átomos y/o organismos para formar secciones de la aplicación.
- `public/`: Almacena activos estáticos como imágenes.
- `pages/`: Archivos que representan una página en Next.js.

## Instalación

Para ejecutar este proyecto localmente, necesitas tener instalado [Node.js](https://nodejs.org/) y preferiblemente [Yarn](https://yarnpkg.com/) como gestor de paquetes.

```bash
# Clona este repositorio
git clone https://github.com/ingenieria-web-udea-LM-20242/daniel-cetina-portafolio

# Navega al directorio del proyecto
cd daniel-cetina-portafolio

# Instala las dependencias
npm install
# o
yarn install

# Ejecuta el servidor de desarrollo
npm run dev
# o
yarn dev
