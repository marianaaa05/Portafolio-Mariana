import React from "react";
import {
  FaLaptopCode,
  FaChartBar,
  FaProjectDiagram,
  FaLightbulb,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      className="w-full text-slate-900 bg-gradient-to-b from-[#071013] to-[#276561]"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sm:text-left pb-8">
          <p className="text-4xl text-white font-bold inline border-b-4 border-[#DF90AD]">
            Acerca de mí...
          </p>
        </div>
        <div className="flex flex-col justify-center max-w-3xl mx-auto px-4 text-white">
          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            <FaLaptopCode className="text-[#DF90AD] text-2xl mt-1" />
            Soy Ingeniera Informática de la Corporación Universitaria Autónoma
            de Nariño con interés en el desarrollo web moderno, la construcción
            de soluciones digitales y la mejora de procesos mediante tecnología.
            <br />
            <br />
            Tengo experiencia en:
            <ul className="list-disc list-inside ml-4">
              <li>Desarrollo de aplicaciones web con React y Next.js</li>
              <li>Diseño de interfaces aplicando principios UX/UI</li>
              <li>Integración de bases de datos PostgreSQL</li>
              <li>Implementación de autenticación y control de roles</li>
              <li>Gestión de archivos mediante servicios en la nube</li>
            </ul>
          </p>

          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            <FaChartBar className="text-[#DF90AD] text-2xl mt-1" />
            Además, he complementado mi formación con estudios en{" "}
            <span className="font-semibold">análisis de datos</span>,
            fortaleciendo mis habilidades para interpretar información y apoyar
            la toma de decisiones tecnológicas.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed mb-6">
            <FaProjectDiagram className="text-[#DF90AD] text-2xl mt-1" />
            Complementando mi perfil técnico, cuento con conocimientos en{" "}
            <span className="font-semibold">análisis de requerimientos</span> y
            diseño de <span className="font-semibold">diagramas UML</span>,
            herramientas que me permiten comprender las necesidades del usuario,
            traducirlas en especificaciones técnicas claras y diseñar soluciones
            coherentes desde la fase inicial de un proyecto hasta su
            implementación.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed">
            <FaLightbulb className="text-[#DF90AD] text-2xl mt-1" />
            Finalmente, me caracterizo por mi resolución de problemas, buscando
            siempre soluciones óptimas, me gusta crear resultados creativos, que
            hagan la diferencia; tengo una visión estratégica centrada en el
            usuario; busco siempre aprender tanto en el área educativa como en
            el campo laboral.
          </p>

          <p className="font-serif sm:text-lg leading-relaxed mt-6">
            <span className="font-semibold">Busco oportunidades donde pueda aplicar mis conocimientos, adquirir experiencia profesional y seguir creciendo en el campo de la informática y la tecnología.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
