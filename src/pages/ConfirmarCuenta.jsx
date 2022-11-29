import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from '../config/clienteAxios';
import Alerta from "../components/Alerta";


const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await clienteAxios(url);
        console.log(data)   

        setAlerta({ 
          msg: data.msg,
          error: false
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        });
      }
    };
    confirmarCuenta();
  }, [id]);

  const { msg } = alerta;

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('img/bariloche1.jpg')" }}
      ></div>
      <div className="grid grid-cols-1 text-center text-white px-12 md:px-12">
        <h1 className="font-Amatic text-sky-600 text-8xl font-black mt-32">
          Confirma Tu cuenta y comienza a disfrutar de Paquetes y Viajes!!! {""}
          <span className="text-slate-700">Hermosas Aventuras!!!</span>
        </h1>
        <div className="flex justify-center">
        <div className="mt-20 md:mt-10 w-96 shadow-lg px-5 py-10 rounded-xl bg-white">
          {msg && <Alerta alerta={alerta} />}

          {cuentaConfirmada && (
            <Link
              to="/Login"
              className=" text-center my-5 text-white uppercase text-sm 
              px-7 py-3 bg-green-600 font-medium leading-snug rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-52"
            >
              Inicia Sesión
            </Link>
          )}
        </div>
        </div>
        <Card />
        <Card />
      </div>
    </>
  );
};

export default ConfirmarCuenta;
