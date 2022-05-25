import React from "react";
import { NavLink } from "react-router-dom";


const FormInicioSesion = () => {
  return (
    <>
      <section className="xl:h-screen lg:h-auto">
        <div className="px-6 h-full text-gray-800 mt-8">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="img/viaje3.png"
                className="w-full rounded-2xl"
                aria-hidden
                alt="Picture of me taking a photo of an image"
              />
            </div>
            <div className="xl:ml-20 px-4 sm:mt-6 xl:mt-0 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 rounded-3xl bg-[#0182c733]">
              <div className="">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start mr-3">
                  <p className="text-2xl xl:mt-2 xl:ml-6 font-bold text-white">
                    Iniciar Sesión:
                  </p>

                  {/*  Button Facebook  */}
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2"
                  >
                    {/*  <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-4 h-4"
                    >
                      {/*  <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </button>

                  {/*  Button Linkedin  */}
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                  >
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4"
                    >
                      {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-bold mx-4 mb-0 text-white">
                    Or
                  </p>
                </div>

                {/*<!-- Email input --> */}

                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check ml-4">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="checkbox"
                    />
                    <label
                      className="form-check-label inline-block ml-1 font-bold text-white"
                      htmlFor=""
                    >
                      Recuerdame
                    </label>
                  </div>

                  <a
                    href="/RecuperarClave"
                    className="text-white font-bold mr-2"
                  >
                    Ha olvidado su contraseña?{" "}
                  </a>
                </div>

                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  >
                    Iniciar Sesión
                  </button>
                  <NavLink to="/">
                    <button
                      type="button"
                      className="inline-block px-7 py-3 mt-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    >
                      Volver
                    </button>
                  </NavLink>
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-white ml-4">
                    ¿No tiene una cuenta?
                    <a
                      href="/CrearCuenta"
                      className="text-red-600 hover:text-green-700 focus:text-green-700 transition duration-200 ease-in-out font-bold"
                    >
                      {" "}
                      Regístrese
                    </a>
                  </p>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormInicioSesion;
