import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormReestablecerPassword = () => {
  // Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("El Nuevo password no puede ir vacio")
        .min(6, "El Nuevo password debe contener al menos 6 caracteres"),
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
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                aria-hidden
                alt="Picture of me taking a photo of an image"
              />
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-white max-w-md  flex justify-end lg:mt-8 md:mt-5">
              {/* Formulario */}
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mb-6 lg:w-80 sm:w-44">
                  <div className="form-group mb-6">
                    <input
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange} // Este evento le coloca formik al state el valor que escribe el usuario.
                      onBlur={formik.handleBlur} // Evento que avisa si el input quedo vacio.
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
                      id="password"
                      placeholder="Escribe tu Nuevo Password"
                      // onChange={(e) => setPassword(e.target.value)}
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
                  Guardar Nuevo Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormReestablecerPassword;
