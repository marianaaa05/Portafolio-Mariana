import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import portafolio from "../assets/proyectos/portafolio.png";
import Tienda from "../assets/proyectos/tienda.jpeg";
import demoapi from "../assets/proyectos/demoapi.jpeg";
import apicrud from "../assets/proyectos/apicrud.jpeg";
import aesthetic from "../assets/proyectos/aesthetic.png";
import tiendamaquillaje from "../assets/proyectos/tiendamaquillaje.png";
import apichatgpt from "../assets/proyectos/apichatgpt.jpeg";
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
    // {
    //   id: 7,
    //   src: apichatgpt,
    //   demo: "https://chat-gpt-theta.vercel.app/",
    //   code: "https://github.com/marianaaa05/Chat-gpt",
    //   texto: "Api de Chat GPT",
    // },
  ];

  return (
    <div name="works" className="w-full text-slate-900 bg-[#0B594B]">
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
              className="shadow-md shadow-[#0B594B] rounded-lg bg-[#059F9B]"
            >
              <img
                src={src}
                alt="Imagenes de referencia"
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className="p-4 text-center">
                <p className="text-2xl font-bold">{texto}</p>
              </div>
              <div className="flex items-center justify-center">
                {demo && (
                  <a href={demo}>
                    <button className="group text-white font-semibold px-6 py-3 my-4 flex items-center justify-center gap-2 rounded-xl border-4 border-[#DF90AD] bg-gradient-to-br from-[#059F9B] to-[#0B594B] shadow-md shadow-[#0B594B]/40 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-[#D96A9E] hover:to-[#DF90AD] focus:outline-none focus:ring-4 focus:ring-[#DF90AD]/50">
                      Visualizar
                    </button>
                  </a>
                )}
                <a href={code}>
                  <button className="group text-white font-semibold px-6 py-3 my-4 flex items-center justify-center gap-2 rounded-xl border-4 border-[#DF90AD] bg-gradient-to-br from-[#059F9B] to-[#0B594B] shadow-md shadow-[#0B594B]/40 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:from-[#D96A9E] hover:to-[#DF90AD] focus:outline-none focus:ring-4 focus:ring-[#DF90AD]/50">
                    Encontrar en Github
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <p className="text-4xl font-bold text-white border-b-4 border-[#DF90AD] text-center mx-auto max-w-fit mb-6">
            Gracias por visitar mi portafolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
