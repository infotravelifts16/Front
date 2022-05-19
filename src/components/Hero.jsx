import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover" 
        style={{
          backgroundposition: "50%",
          backgroundImage:
          "url('img/carousel/chalten.jpg')",
          height: "70vh"
        }} 
      >
        <div
          class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundCcolor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="font-Amatic text-teal-200 text-8xl font-bold mt-0 mb-6">Bienvenidos a Infotravel</h1>
              <h3 class=" font-Amatic text-4xl font-bold mb-8">Un Sitio para Disfrutar de Hermosos y Sorprendentes Lugares</h3>
              <button
                type="button"
                class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
