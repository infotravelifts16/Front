import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
/* import CrearCuenta from '../modules/CrearCuenta'; */




const PaginaPrincipal = () => {
  return (
    <>
    <NavBar />
    <Hero /> 
    <Info/>
    </>
  );
};

export default PaginaPrincipal;
