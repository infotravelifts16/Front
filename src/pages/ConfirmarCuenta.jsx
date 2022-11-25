import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => { 
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/bariloche1.jpg')" }}></div>
      <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
        <h1 className="font-Amatic text-sky-600 text-8xl font-black mt-32">
          Confirma Tu cuenta y comienza a disfrutar de Paquetes y Viajes!!! {""}
          <span className="text-slate-700">Hermosas Aventuras!!!</span>
        </h1>
        <Card/>
        <Card/>

      </div>
    </>
  );
};

export default ConfirmarCuenta;
