import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import LMS from "../assets/proyectos/lms.png";


const Works = () => {
  const proyectos = [
    {
      id: 1,
      src: LMS,
      demo: "https://skahverse.vercel.app/",
      code: "https://github.com/marianaaa05/sga",
      texto: "LMS interactivo",
    },
  ];

  return (
    <div name="works" className="w-full text-slate-900 bg-gradient-to-b from-[#276561] to-[#071013]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#DF90AD]">
            Proyecto: LMS interactivo
          </p>
          <p className="py-6 text-white">
            Consta del diseño, desarrollo, implementación y evaluación de un LMS (Learning Management System) como apoyo para la gestión 
            de información documental de los semilleros de investigación de mi universidad. 
            Herramientas de desarrollo principales: Next.js, JavaScript, React, Tailwind CSS, PostgreSQL, Neon, Clerk y Supabase. 
          </p>
          <p className="py-6 text-white">Puedes visitarlo!</p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12 px-12 sm:px-0 "> */}
        <div className="gap-8 px-12 sm:px-0">
          {proyectos.map(({ id, src, demo, code, texto }) => (
            <div
              key={id}
              className="rounded-2xl shadow-lg shadow-[#0B594B]/30 bg-gradient-to-b from-[#0B4945] to-[#02302D] hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={src}
                alt="Imagenes de referencia"
                className="rounded-t-2xl object-cover w-full h-full"
              />
              <div className="p-5 text-center">
                <p className="text-2xl font-semibold text-white mb-4">{texto}</p>
              </div>
              {/* <div className="flex items-center justify-center"> */}
              <div className="flex sm:flex-row justify-center gap-4">
                {demo && (
                  <a href={demo}>
                    <button className="w-full sm:w-auto px-5 py-2 text-white font-medium rounded-lg bg-[#28a09c] hover:bg-[#276561] transition-all duration-300 shadow-md hover:shadow-lg">
                      Visualizar
                    </button>
                  </a>
                )}
                <a href={code}>
                  <button className="w-full sm:w-auto px-5 py-2 text-white font-medium rounded-lg bg-[#28a09c] hover:bg-[#276561] transition-all duration-300 shadow-md hover:shadow-lg">
                    Encontrar en Github
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="h-32" />
        {/* <div className="flex justify-center mt-8">
          <p className="text-4xl font-bold text-white border-b-4 border-[#DF90AD] text-center mx-auto max-w-fit mb-6">
            Gracias por visitar mi portafolio!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Works;
