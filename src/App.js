import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from "../src/components/NavBar";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import Registrar from "./pages/Registrar";
import Login from "./pages/Login";
import OlvidePassword from "./pages/OlvidePassword";
import QuienesSomos from "./pages/QuienesSomos";
import Promociones from "./pages/Promociones";
import Contacto from "./pages/Contacto";
import NotFoundPage from './pages/NotFoundPage';
/* import AuthLayout from "./layouts/AuthLayout"; */
import NuevoPassword from "./pages/NuevoPassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";



const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<PaginaPrincipal />}/>
              <Route path="Login" element={<Login />} />
              <Route path="Registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="olvide-password/:token" element={<NuevoPassword />} />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
        
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
