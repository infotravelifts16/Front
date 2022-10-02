import React from "react";

const MixImagen = () => {
  return (
    <>
      <div>
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap mt-6 md:mt-5 p-2">
              <h2 className="text-5xl  font-bold mt-20 2xl:text-center text-center font-Amatic">
                Mendoza,Jujuy,Bariloche,Ushuaia para conocer
              </h2>
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/viñedo.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/bariloche.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/jujuy.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/jujuy2.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/ushuaia.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/peritomoreno.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Seccion 2 */}
      <div>
        <section className="overflow-hidden text-gray-700">
          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            <div className="flex flex-wrap mt-6 md:mt-5 p-2">
              <h2 className="text-5xl  font-bold mt-20 2xl:text-center text-center font-Amatic">
                Salta,Calafate,Iguazú,Cordoba y mucho mas...
              </h2>
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/chalten.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/salta.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/iguazu.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/cordoba.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/bariloche1.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg hover:opacity-70"
                    src="img/sanmartin.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MixImagen;
