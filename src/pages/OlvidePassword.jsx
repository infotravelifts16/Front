import React from "react";
import FormRecuperarClave from "../components/FormRecuperarClave";

const OlvidePassword = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center  xl:h-full lg:h-full md:h-full"
        style={{ backgroundImage: "url('img/viaje11.png')" }}
      >
        <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
          <h1 className="font-Amatic text-8xl font-black mt-10">
            Recupera Tu Acceso
          </h1>
        </div>
        <FormRecuperarClave />
      </div>
    </>
  );
};

export default OlvidePassword;
