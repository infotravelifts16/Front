import React from "react";
import FormReestablecerPassword from "../components/FormReestablecerPassword";

const NuevoPassword = () => {
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
        <FormReestablecerPassword />
      </div>
    </>
  );
};

export default NuevoPassword;
