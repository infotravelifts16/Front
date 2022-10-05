import Persona from "../components/Persona";
/* import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"; */ /** Para Utilizar boton flecha volver */

const QuienesSomos = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/viaje7.png')" }}
      >
        <div className="grid grid-cols-1 text-center text-black px-12 md:px-12">
         {/*  <div className="flex justify-between mt-5"> ----- Para Utilizar boton flecha volver ----- 
            <Link to="/">
              <FontAwesomeIcon
                className="w-10 h-10 text-black bg-white rounded-full hover:text-teal-500"
                icon={faCircleArrowLeft}
              />
            </Link>
          </div> */}
         {/*  <h1 className="font-Amatic hover:text-slate-700 lg:text-8xl md:text-6xl font-black mt-10 text-5xl">
            Quienes Somos
          </h1> */}
          <div className="grid grid-cols-1 gap-6 text-center text-white px-12 md:px-12 rounded-2xl mb-20 mt-10">
            <Persona />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
