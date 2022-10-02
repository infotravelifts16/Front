import React from "react";

const Card = () => {
  return (
    <div>
     <h2 className="text-5xl  font-bold mt-20 2xl:text-center text-center font-Amatic">
                Algunos destinos para recorrer
              </h2>
      <div className="grid md:grid-cols-3 gap-x-6 xl:gap-x-6 items-center mb-12 xl:ml-10">
        <div className="rounded-lg shadow-lg bg-slate-300 max-w-sm m-10">
          <a href="#!">
            <img className="rounded-t-lg" src="img/bariloche1.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
              Bariloche
            </h5>
            <p className="text-gray-700 text-base mb-4 text-center">
              San Carlos de Bariloche (comúnmente llamada Bariloche) es una
              ciudad en la región de la Patagonia argentina. Limita con Nahuel
              Huapi, un gran lago glacial rodeado de montañas de los Andes.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex justify-center text-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver Oferta
              </button>
            </div>
          </div>
        </div>

        {/*  Card 2 */}
        <div className="rounded-lg shadow-lg bg-slate-300 max-w-sm m-10">
          <a href="#!">
            <img className="rounded-t-lg" src="img/jujuy3.jpg" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
              San Salvador de Jujuy
            </h5>
            <p className="text-gray-700 text-base mb-4 text-center">
              San Salvador de Jujuy es una ciudad del noroeste de Argentina,
              cabecera del departamento Doctor Manuel Belgrano y capital y
              ciudad más poblada de la provincia de Jujuy.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex justify-center text-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver Oferta
              </button>
            </div>
          </div>
        </div>

        {/*  Card 3 */}

        <div className="rounded-lg shadow-lg bg-slate-300 max-w-sm m-10">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="img/Malargüe.jpg"
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">
              Malargüe
            </h5>
            <p className="text-gray-700 text-base mb-4 text-center">
              Malargüe es una ciudad de la provincia argentina de Mendoza, a los
              pies de la cordillera de los Andes. Al suroeste está la Caverna de
              las Brujas, una reserva natural con un amplio complejo cavernoso.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex justify-center text-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Ver Oferta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
