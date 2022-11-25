import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";
import MixImagen from "../components/MixImagen";
import Card from "../components/Card";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";


const AuthLayout = () => {
  return (
    <>
    <Hero /> 
    <Outlet />
    <MixImagen/>
    <Card/>
    <Info/>
    <Testimonials/>
    <Video/>          
    </>
  );
};

export default AuthLayout;
