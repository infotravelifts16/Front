import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormInicioSesion = () => {
  // Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string()
        .required("El password no puede ir vacio")
    }),
    onSubmit: (valores) => {
      console.log(valores);
    },
  });
  return (
    <>
      <section className="h-screen">
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
              <div>
                {/* Formulario */}
                <form onSubmit={formik.handleSubmit}>
                  <div className="flex flex-row items-center justify-center lg:justify-start mr-3">
                    <p className="text-6xl xl:mt-2 xl:ml-6 font-bold text-white  uppercase font-Amatic">
                      Iniciar Sesión:
                    </p>
                  </div>

                  <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    <p className="text-center font-bold mx-4 mb-0 text-white"></p>
                  </div>

                  {/*<!-- Email input --> */}

                  <div className="mb-6">
                    <input
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                      onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="email"
                      placeholder="Email"
                    />
                    {/* Mensaje de Error en Email incompleto */}
                    {formik.touched.email && formik.errors.email ? (
                      <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.email}</p>
                      </div>
                    ) : null}
                    {/* Cierre de Mensaje Error */}
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                      onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="password"
                      placeholder="Password"
                    />
                    {/* Mensaje de password incompleto */}
                    {formik.touched.password && formik.errors.password ? (
                      <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{formik.errors.password}</p>
                      </div>
                    ) : null}
                    {/* Cierre de Mensaje Error */}
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
                      type="submit"
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
                    <p className="text-sm font-semibold mt-4 pt-1 text-white ml-4 mb-5">
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
