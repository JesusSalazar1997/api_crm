import Formulario from '../components/Formulario'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setTimeout(() => {
                setCargando(!cargando)
            }, 100);

        }
        obtenerClienteAPI()
    }, [])

    return (
        <>
            <h1 className='font-black text-blue-900 text-4xl'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar datos de un cliente</p>
            {cliente?.nombre ? (
                <Formulario
                    cargando={cargando}
                    cliente={cliente}
                />
            ) : <p>Cliente ID no válido</p>
            }
        </>
    )
}

export default EditarCliente