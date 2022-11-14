import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormContacto = () => {
  // Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      mensaje: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El Nombre es Obligatorio"),
      apellido: Yup.string().required("El Apellido es Obligatorio"),
      mensaje: Yup.string().required("El Mensaje es Obligatorio"),
    }),
    onSubmit: (valores) => {
      console.log(valores);
    },
  });

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
              {/* Formulario */}
              <form onSubmit={formik.handleSubmit}>
                {/* Mensaje de Error en nombre incompleto */}
                {formik.touched.nombre && formik.errors.nombre ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.nombre}</p>
                  </div>
                ) : null}
                {/* Cierre de Mensaje Error */}

                {/* Mensaje de Error en Apellido incompleto */}
                {formik.touched.apellido && formik.errors.apellido ? (
                  <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                    <p className="font-bold">Error</p>
                    <p>{formik.errors.apellido}</p>
                  </div>
                ) : null}
                {/* Cierre de Mensaje Error */}

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      value={formik.values.nombre}
                      onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                      onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
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
                      value={formik.values.apellido}
                      onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                      onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
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
                    id="mensaje"
                    value={formik.values.mensaje}
                    onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                    onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Deje su Mensaje..."
                  ></textarea>

                  {/* Mensaje de Error en Email incompleto */}
                  {formik.touched.mensaje && formik.errors.mensaje ? (
                    <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                      <p className="font-bold">Error</p>
                      <p>{formik.errors.mensaje}</p>
                    </div>
                  ) : null}
                  {/* Cierre de Mensaje Error */}
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

                <Link
                  to="/"
                  className="inline-block px-6 py-2.5 mt-4 bg-blue-600 text-center text-white font-medium text-xs leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                >
                  Volver
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormContacto;
