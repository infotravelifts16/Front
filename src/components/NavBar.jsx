import React, {useState} from "react";
import { Link , useLocation } from 'react-router-dom';


const NavBar = () => {  
  const [isMenuActive, setIsMenuActive] = useState(false)
  const location = useLocation()
 
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2" 
            width="54"
            height="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z" />
          </svg>

          <Link 
            to="/"
            className="font-Amatic text-4xl hover:text-teal-200 tracking-tight ml-4 cursor-pointer"
          >
            Infotravel
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuActive(!isMenuActive)}
            id="boton"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="menu"
          className={isMenuActive ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto" : "hidden w-full  flex-grow lg:flex lg:items-center lg:w-auto"}
        >
          <div className="lg:flex-grow text-center text-2xl">
            <Link
              to="/QuienesSomos"
              className={`${location.pathname === '/QuienesSomos' ? 'text-teal-300' : 'text-white'} font-Amatic block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-teal-200 mr-4 `}
            >
              Quienes Somos
            </Link>
           
            <Link
              to="/Promociones"
              className={`${location.pathname === '/Promociones' ? 'text-teal-300' : 'text-white'} font-Amatic block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-teal-200 mr-4 `}
            >
              Promociones
            </Link>
            <Link
              to="/Contacto"
              className={`${location.pathname === '/Contacto' ? 'text-teal-300' : 'text-white'} font-Amatic block mt-4 lg:inline-block lg:mt-0 text-white  hover:text-teal-200 mr-4 `}
            >
              Contacto 
            </Link>
          </div>
          <div className="font-Amatic text-lg text-center flex flex-col lg:flex-row">
            
            <Link to="/Login">
            <div>
              <button
                type="submit"
                className={` ${location.pathname === '/Login' ? 'text-teal-500 bg-white' : 'text-white'} inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 `}
              >
                Iniciar Sesión
              </button>
            </div>
            </Link>
            <Link to="/Registrar">
            <div className="ml-5">
              <button
                type="submit"
                className={` ${location.pathname === '/Registrar' ? 'text-teal-500 bg-white' : 'text-white'} inline-block text-xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 `}
              >
                Crear Cuenta
              </button>
            </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
