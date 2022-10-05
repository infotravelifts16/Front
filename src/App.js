import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from "../src/components/NavBar";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";
import RecuperarClave from "./pages/RecuperarClave";
import QuienesSomos from "./pages/QuienesSomos";
import Promociones from "./pages/Promociones";
import Contacto from "./pages/Contacto";
import NotFoundPage from './pages/NotFoundPage';



const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/RecuperarClave" element={<RecuperarClave />} />
        <Route path="/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
