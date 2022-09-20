import React from "react";
import { NavLink } from "react-router-dom";

const FormContacto = () => {
  return (
    <>
      <div className="xl:h-screen lg:h-auto">
        <div className="container px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="./img/travel-contactenos.png"
                className="w-full"
                aria-hidden
                alt="Picture of me taking a photo of an image"
              />
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white max-w-md  flex justify-end lg:mt-8 md:mt-5">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control
          block
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
                      id="nombre"
                      aria-describedby="nombre"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control
          block
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
                      id="apellido"
                      aria-describedby="apellido"
                      placeholder="Apellido"
                    />
                  </div>
                </div>

                <div className="form-group mb-6">
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Deje su Mensaje..."
                  ></textarea>
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
                  Enviar
                </button>

                <NavLink to="/">
                  <button
                    type="button"
                    className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-white font-medium text-xs leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
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
export default FormContacto;
