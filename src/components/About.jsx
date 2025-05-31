import React from "react";

const About = () => {
  return (
    // 
    // <div name="about" className="flex flex-col w-full bg-[#059F9B] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2px">
    //   <div className="max-w-[1500px] w-full grid sm:grid-cols-2 gap-20 px-40">
    <div name="about" className="w-full text-slate-900 bg-[#059F9B]">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-left pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#DF90AD]">
            Acerca de mí...
          </p>
        </div>
        <div className="flex flex-col justify-center max-w-3xl mx-auto px-4 text-[#02302D]">

          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            A lo largo de mi trayectoria académica, he tenido la oportunidad de construir proyectos tecnológicos significativos para mi aprendizaje,
            aplicando tecnologías modernas como <span className="font-semibold">React, Next.js, JavaScript, Tailwind CSS, Astro, Vite, Node.js, GitHub, HTML, CSS y Vercel</span>.
            Estos proyectos me han permitido desarrollar tanto mi pensamiento técnico como visual, creando productos funcionales
            y visualmente atractivos basados en principios de UX/UI.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            Actualmente, me encuentro realizando un curso certificado de <span className="font-semibold">análisis de datos</span>,
            donde estoy desarrollando habilidades sobre la interpretación de información, visualización de resultados y toma de decisiones basadas en datos.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            Complementando mi perfil técnico, cuento con conocimientos en  <span className="font-semibold">análisis de requerimientos</span> y diseño de <span className="font-semibold">diagramas UML</span>,
            herramientas que me permiten comprender las necesidades del usuario, traducirlas en
            especificaciones técnicas claras y diseñar soluciones coherentes desde su fase inicial hasta su implementación.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed">
            Finalmente, me caracterizo por mi resolución de problemas, buscando siempre soluciones óptimas, me gusta crear
            resultados creativos, que hagan la diferencia; tengo una visión estratégica centrada en el usuario; busco siempre
            aprender tanto en el área educativa como en el campo laboral.
          </p>
        </div>
      </div>
    </div>

  );
};

export default About;
