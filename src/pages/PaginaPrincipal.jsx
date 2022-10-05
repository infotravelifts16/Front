import React from "react";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Video from "../components/Video";
import MixImagen from "../components/MixImagen";
import Card from "../components/Card";
/* import CrearCuenta from '../modules/CrearCuenta'; */




const PaginaPrincipal = () => {
  return (
    <>
    <Hero /> 
    <MixImagen/>
    <Card/>
    <Info/>
    <Video/>
    </>
  );
};

export default PaginaPrincipal;
