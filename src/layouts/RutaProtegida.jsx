import { Outlet, Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const RutaProtegida = () => {
    const { auth, cargando  } = useAuth();

    if(cargando) return 'Cargando...'
  return (
    <>
        {auth._id ? (
            <div>
                <main>
                    <Outlet/>
                </main>

            </div>
        ) : <Navigate to="/Login"/> }
    </>
  )
}

export default RutaProtegida