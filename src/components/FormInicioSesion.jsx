import {useState} from "react";
import { NavLink } from "react-router-dom";
import Alerta from "./Alerta";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";



const FormInicioSesion = () => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { setAuth } = useAuth();


  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son requeridos',
        error: true
      });
      return
    }

    try {
      const { data} = await clienteAxios.post('/usuarios/login', { email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta

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
              {msg && <Alerta alerta={alerta} />}
                {/* Formulario */}
                <form onSubmit={handleSubmit}>
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
                      value={email}
                      onChange={ e => setEmail(e.target.value)}
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="email"
                      placeholder="Email"
                    />
                    
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      value={password}
                      onChange={ e => setPassword(e.target.value)}
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
                      href="/olvide-password"
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
