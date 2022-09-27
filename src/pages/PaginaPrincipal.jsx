import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import Video from "../components/Video";
/* import CrearCuenta from '../modules/CrearCuenta'; */




const PaginaPrincipal = () => {
  return (
    <>
    <NavBar />
    <Hero /> 
    <Info/>
    <Video/>
    </>
  );
};

export default PaginaPrincipal;
