import React from "react";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/javascript.svg";
import TAILWINDCSS from "../assets/tailwindcss.svg";
import nextjs from "../assets/nextjs.svg";
import astro from "../assets/astro.svg";
import vercel from "../assets/vercel.svg";
import vite from "../assets/vite.svg";
import nodejs from "../assets/nodejs.svg";
import react from "../assets/react.svg";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-[#071013] to-[#276561]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#DF90AD]">
            Tecnologías
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <a
            href="https://developer.mozilla.org/es/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-2 font-bold text-white">HTML</p>
            <p className="text-sm text-white">
              Lenguaje de marcado para estructurar contenido web.
            </p>
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-2 font-bold text-white">CSS</p>
            <p className="text-sm text-white">
              Estiliza y da diseño visual a sitios web.
            </p>
          </a>

          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={react} alt="React icon" />
            <p className="my-2 font-bold text-white">React</p>
            <p className="text-sm text-white">
              Librería para crear interfaces de usuario dinámicas.
            </p>
          </a>

          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={JS} alt="JavaScript icon" />
            <p className="my-2 font-bold text-white">JavaScript</p>
            <p className="text-sm text-white">
              Lenguaje de programación para interacción en la web.
            </p>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img
              className="w-25 mx-auto"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub icon"
            />
            <p className="my-2 font-bold text-white">GitHub</p>
            <p className="text-sm text-white">
              Plataforma para control de versiones y colaboración.
            </p>
          </a>

          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={nextjs} alt="Next.js icon" />
            <p className="my-2 font-bold text-white">Next.js</p>
            <p className="text-sm text-white">
              Framework de React para desarrollo web completo.
            </p>
          </a>

          <a
            href="https://astro.build"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={astro} alt="Astro icon" />
            <p className="my-2 font-bold text-white">Astro</p>
            <p className="text-sm text-white">
              Framework rápido para sitios web estáticos y modernos.
            </p>
          </a>

          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={vercel} alt="Vercel icon" />
            <p className="my-2 font-bold text-white">Vercel</p>
            <p className="text-sm text-white">
              Plataforma para desplegar sitios web frontend fácilmente.
            </p>
          </a>

          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-40 mx-auto" src={vite} alt="Vite icon" />
            <p className="my-2 font-bold text-white">Vite</p>
            <p className="text-sm text-white">
              Herramienta de desarrollo rápida para proyectos frontend.
            </p>
          </a>

          <a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img className="w-25 mx-auto" src={nodejs} alt="Node.js icon" />
            <p className="my-2 font-bold text-white">Node.js</p>
            <p className="text-sm text-white">
              Entorno de ejecución para JavaScript en el servidor.
            </p>
          </a>

          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shadow-md shadow-[#D96A9E] hover:scale-110 duration-500 border-4 border-[#DF90AD] p-4 rounded-2xl"
          >
            <img
              className="w-25 mx-auto"
              src={TAILWINDCSS}
              alt="Tailwind CSS icon"
            />
            <p className="my-2 font-bold text-white">Tailwind CSS</p>
            <p className="text-sm text-white">
              Framework de CSS para diseño rápido y personalizable.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
