import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import PaginaPrincipal from "./pages/PaginaPrincipal";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";
import RecuperarClave from "./pages/RecuperarClave";
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPrincipal />} />
        <Route path="/CrearCuenta" element={<CrearCuenta />} />
        <Route path="/IniciarSesion" element={<IniciarSesion />} />
        <Route path="/RecuperarClave" element={<RecuperarClave />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
