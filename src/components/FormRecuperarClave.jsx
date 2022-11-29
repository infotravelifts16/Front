import React from "react";
import { NavLink } from "react-router-dom";
import Alerta from "./Alerta";
import { useState } from "react";
import clienteAxios from "../config/clienteAxios";

const FormRecuperarClave = () => {
  
  const [email, SetEmail] = useState('');
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if(email === '' || email.length < 6) {
      setAlerta({
        msg: 'El Email es obligatorio',
        error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })
      setAlerta({
        msg: data.msg,
        error: false
      })

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta;

  return (
    <>
      <div className="xl:h-screen lg:h-auto">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                aria-hidden
                alt="Picture of me taking a photo of an image"
              />
            </div>
             
            <div className="p-6 rounded-lg shadow-lg bg-white max-w-md  flex justify-end lg:mt-8 md:mt-5">
              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-6 lg:w-80 sm:w-44">
                { msg && <Alerta alerta={alerta} />}
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={ e => SetEmail(e.target.value)}
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    
                  />
                </div>
                <button
                  type="submit"
                  className="
      w-full
      px-6
      py-2.5
      bg-green-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-green-700 hover:shadow-lg
      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-green-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                >
                  Enviar Instrucciones
                </button>

                <NavLink to="/">
                  <button
                    type="submit"
                    className="
      w-full
      px-6
      py-2.5
      mt-3
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  >
                    Volver
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRecuperarClave;
