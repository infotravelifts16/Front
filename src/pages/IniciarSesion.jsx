import React from 'react'
import FormInicioSesion from '../components/FormInicioSesion';

const IniciarSesion = () => {
  return (
    <>
        <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/viaje14.png')"}}
      >
        <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
          <h1 className="font-Amatic hover:text-teal-400 text-6xl font-black mt-10">
            Iniciar Sesion 
          </h1>
        </div>
        <FormInicioSesion/>
      </div>
    
    </>
  )
}

export default IniciarSesion