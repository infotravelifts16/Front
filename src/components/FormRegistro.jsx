import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function FormRegistro() {
  /*  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
 */

  // Formulario y validacion con formik y Yup
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El Nombre es Obligatorio"),
      apellido: Yup.string().required("El Apellido es Obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El Email es Obligatorio"),
      password: Yup.string()
                    .required('El password no puede ir vacio')
                    .min(6, 'El password debe contener al menos 6 caracteres')
    }),
    onSubmit: (valores) => {
      console.log(valores);
    },
  });

 

  return (
    <div className="xl:h-screen lg:h-auto">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
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

              <div className="grid grid-cols-2 gap-4 mt-8">
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
                    // onChange={(e) => setFname(e.target.value)}
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
                    //onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <input
                  type="email"
                  value={formik.values.email}
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
                  id="email"
                  placeholder="Email"
                  //onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Password"
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
                Registrarse
              </button>

              <Link to="/">
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
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormRegistro;
