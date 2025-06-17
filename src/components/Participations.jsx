import React from "react";
import { FaMicroscope, FaBalanceScale, FaLeaf } from "react-icons/fa";
import certificadoMaquinarte from "../assets/certificadoMaquinarte.jpeg"


const participations = () => {
    return (
        // 
        // <div name="about" className="flex flex-col w-full bg-[#059F9B] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2px">
        //   <div className="max-w-[1500px] w-full grid sm:grid-cols-2 gap-20 px-40">
        <div name="participations" className="w-full bg-gradient-to-b from-[#276561] to-[#071013]">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="sm:text-left pb-8">
                    <p className="text-4xl text-white font-bold inline border-b-4 border-[#DF90AD]">
                        Participaciones...<br /><br />
                    </p>
                    <p className="text-2xl text-white font-semibold ">
                        Participación en Maquinarte - "Mas allá del clic: el impacto ambiental de la IA en tus manos"
                    </p>
                </div>
                <div className="flex flex-col justify-center max-w-3xl mx-auto px-4 text-white">

                    <p className="font-serif sm:text-lg leading-relaxed mb-6">
                        <FaMicroscope className="text-[#DF90AD] text-2xl mt-1" />
                        Durante el evento Maquinarte, exploré el impacto social y ambiental de la
                        inteligencia artificial (IA) a través de investigaciones y
                        análisis basados en documentales y conferencias de expertos en el tema.
                    </p>

                    <p className="font-serif sm:text-lg leading-relaxed mb-6">
                        <FaBalanceScale className="text-[#DF90AD] text-2xl mt-1" />
                        <span className="font-semibold">Impacto social de la Inteligencia Artificial: </span>
                        la IA depende del trabajo de millones de personas en países del sur global que realizan
                        tareas mal pagadas como etiquetado y transcripción. En muchos casos, trabajan en condiciones
                        precarias por menos de 2 USD/hora. Este trabajo es esencial, pero invisibilizado. La IA no es
                        completamente autónoma: necesita mano de obra humana,
                        muchas veces expuesta a contenidos perturbadores sin protección ni reconocimiento.
                    </p>

                    <p className="font-serif sm:text-lg leading-relaxed mb-6">
                        <FaLeaf className="text-[#DF90AD] text-2xl mt-1" />
                        <span className="font-semibold">Impacto ambiental de la Inteligencia Artificial: </span>
                        el entrenamiento y uso de modelos de IA consume enormes cantidades de energía y agua.
                        Centros de datos requieren refrigeración intensiva, afectando recursos como el agua potable.
                        Un solo modelo puede emitir más CO₂ que un auto en toda su vida útil.
                        La expansión de la IA plantea un serio desafío ecológico si no se controla su huella.
                    </p>
                    <img
                        src={certificadoMaquinarte}
                        alt="Certificado Maquinarte"
                        width={400}
                        height={400}
                        className="justify-center border-4 border-[#D96A9E] hover:border-[#059F9B] hover:scale-110 duration-500 transition shadow-lg mx-auto w-120 h-auto"
                    />
                </div>
                
            </div>
        </div>

    );
};

export default participations;
