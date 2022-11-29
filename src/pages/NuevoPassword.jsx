import clienteAxios from "../config/clienteAxios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Alerta from "../components/Alerta";


const NuevoPassword = () => {
  
  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false) 
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams
  const { token } = params

  useEffect(() => {
   const comprobarToken = async () => {
    try {
      await clienteAxios(`/usuarios/olvide-password/${token}`)
      setTokenValido(true)
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
   }
   comprobarToken()
  }, [token]); 

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6) {
      setAlerta({
        msg: 'El password debe ser minimo de 6 caracteres',
        error: true
      })
      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, {password})
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alerta



  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center  xl:h-full lg:h-full md:h-full"
        style={{ backgroundImage: "url('img/jujuy2.jpg')"}}
      >
        <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
          <h1 className="font-Amatic text-8xl font-black mt-10">
            Reestablece Tu Password
          </h1>
        </div>
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
            { msg && <Alerta alerta={alerta}/>}
            { tokenValido && (
              <div className="p-6 rounded-lg shadow-lg bg-white max-w-md  flex justify-end lg:mt-8 md:mt-5">
              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-6 lg:w-80 sm:w-44">
                  <div className="form-group mb-6">
                    <input
                      type="password"
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
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      // onChange={(e) => setPassword(e.target.value)}
                    />
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
            )}

            {passwordModificado && (
            <Link
              to="/Login"
              className=" text-center my-5 text-white uppercase text-sm 
              px-7 py-3 bg-green-600 font-medium leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-52"
            >
              Inicia Sesión
            </Link>
          )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default NuevoPassword;
