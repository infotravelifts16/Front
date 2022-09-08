const QuienesSomos = () => {
  return (
    <>
       <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/viaje7.png')" }}
      >
        <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
          <h1 className="font-Amatic hover:text-teal-400 text-8xl font-black mt-10">
            Quienes Somos
          </h1>
          <div className="grid grid-cols-1 text-center text-white px-12 md:px-12 ">
            <p className="font-Amatic text-6xl font-black mt-10">
              Somos un equipo de compañeros del Instituto de Formación Técnica
              Superior N°16.Dentro del 3 año finalizando la carrera se realiza dentro de la materia Taller 3,
              un trabajo final, en donde los alumnos decidimos desarrollar Infotravel.
            </p>
          </div>
        </div>
      </div> 
    </>
  );
};

export default QuienesSomos;
