import React from "react";
import FormRegistro from "../components/FormRegistro";

const Registrar = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/viaje16.png')"}} 
      >
        <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
         {/*  <h1 className="font-Amatic hover:text-teal-400 text-6xl font-black mt-10">
            Crear Cuenta
          </h1> */}
        </div>
        <FormRegistro/>
      </div>
      
    </>
  );
};

export default Registrar;
