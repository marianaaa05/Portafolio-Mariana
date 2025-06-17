import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import portafolio from "../assets/proyectos/portafolio.png";
import Tienda from "../assets/proyectos/tienda.jpeg";
// import demoapi from "../assets/proyectos/demoapi.jpeg";
import apicrud from "../assets/proyectos/apicrud.jpeg";
import aesthetic from "../assets/proyectos/aesthetic.png";
import tiendamaquillaje from "../assets/proyectos/tiendamaquillaje.png";
// import apichatgpt from "../assets/proyectos/apichatgpt.jpeg";
import appheroes from "../assets/proyectos/appheroes.jpeg";

const Works = () => {
  const proyectos = [
    {
      id: 1,
      src: portafolio,
      demo: "https://miportafolio-mariana.netlify.app/",
      code: "https://github.com/marianaaa05/Portafolio-Mariana",
      texto: "Portafolio",
    },
    {
      id: 2,
      src: tiendamaquillaje,
      demo: "https://dazzling-pudding-08cbdd.netlify.app/",
      code: "https://github.com/marianaaa05/maquillaje",
      texto: "Tienda de Maquillaje",
    },
    {
      id: 3,
      src: aesthetic,
      demo: "https://aestheticworld.vercel.app/",
      code: "https://github.com/marianaaa05/vite_vanilla",
      texto: "Aesthetic World con chatbot",
    },
    {
      id: 4,
      src: Tienda,
      demo: "https://tienda-ochre.vercel.app/",
      code: "https://github.com/marianaaa05/tienda",
      texto: "Comercio Electrónico",
    },
    {
      id: 5,
      src: apicrud,
      demo: "https://api-crud-sigma.vercel.app/?vercelToolbarCode=PpMoXhk5WYq_5uf",
      code: "https://github.com/marianaaa05/API_CRUD",
      texto: "API CRUD",
    },
    {
      id: 6,
      src: appheroes,
      demo: "https://app-de-heroes.vercel.app/marvel",
      code: "https://github.com/marianaaa05/App-de-heroes",
      texto: "App de Heroes",
    },
  ];

  return (
    <div name="works" className="w-full text-slate-900 bg-gradient-to-b from-[#276561] to-[#071013]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#DF90AD]">
            Proyectos
          </p>
          <p className="py-6 text-white">
            Los siguientes son algunos de mis proyectos.
          </p>
          <p className="py-6 text-white">Puedes revisarlos!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-12 px-12 sm:px-0 ">
          {proyectos.map(({ id, src, demo, code, texto }) => (
            <div
              key={id}
              className="rounded-2xl shadow-lg shadow-[#0B594B]/30 bg-gradient-to-b from-[#0B4945] to-[#02302D] hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={src}
                alt="Imagenes de referencia"
                className="rounded-t-2xl object-cover w-full h-48"
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
