import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Video from "../components/Video";
import MixImagen from "../components/MixImagen";
/* import CrearCuenta from '../modules/CrearCuenta'; */




const PaginaPrincipal = () => {
  return (
    <>
    <NavBar />
    <Hero /> 
    <MixImagen/>
    <Info/>
    <Video/>
    </>
  );
};

export default PaginaPrincipal;
