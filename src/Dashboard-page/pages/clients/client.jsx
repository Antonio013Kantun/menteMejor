import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Product() {

    const id = window.location.href.split("/")[4]
    
    const [cliente, setCliente] = useState({});


    const eliminarCliente = function(e) {
        e.preventDefault();
        console.log(id)
        axios.delete("http://localhost:3001/clientes/" + id).then(function(){
            console.log("Borrado corectamente")
        }).catch(function(){
            console.error("No se ha eliminado")
        })
        window.location.href="/clientes"
    }

    useEffect(function(){
        axios.get("http://localhost:3001/clientes/" + id).then(function(datos){
            console.log(datos.data)
            setCliente(datos.data)
        }).catch(function(){
            console.error("Error")
        })
    },[])
    
    return(<div>
        <h1>{cliente.nombre}</h1>
        <p>{cliente.email}</p>
        <p>{cliente.contrasena}</p>
        <p>{cliente.direccion}</p>
        <p>{cliente.ciudad}</p>
        <p>{cliente.estado}</p>
        <p>{cliente.pais}</p>
        <span>
        <Link to="/clientes">Volver</Link>
        </span>

        <span onClick={eliminarCliente} className=" text-red-500 cursor-pointer">
            Eliminar
        </span>
    </div>)
}