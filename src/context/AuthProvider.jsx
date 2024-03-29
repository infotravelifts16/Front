import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ auth, setAuth] = useState({})
    const [ cargando, setCargando] = useState(true)

    const Navigate = useNavigate()

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                setCargando(false)
                return
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const { data } = await clienteAxios('/usuarios/perfil', config)
                setAuth(data)
               /*  Navigate('/Promociones') */
            } catch (error) {
                setAuth({})
            } finally {
                setCargando(false)
            }
           
        }
        autenticarUsuario()
    }, [Navigate])


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;