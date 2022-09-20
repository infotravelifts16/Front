import React from "react";
import FormContacto from "../components/FormContacto";

const Contacto = () => {
    return (   <>
        <div
          className="bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('img/viaje4.png')" }}
        >
          <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
            <h1 className="font-Amatic hover:text-teal-800 text-8xl font-black mt-10">
                Contactenos
            </h1>
            <p className="font-Amatic hover:text-teal-800 text-4xl font-black mt-10">Ante Cualquie duda o consulta no dude en escribirnos, Intentaremos resolver su consulta a la Brevedad!</p>
          </div>
          <FormContacto/>
        </div>
      </>);
}
 
export default Contacto;