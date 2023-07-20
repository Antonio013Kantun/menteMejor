import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Admin() {

    const id = window.location.href.split("/")[4]
    
    const [administrador, setAdministrador] = useState({});


    const eliminarAdministrador = function(e) {
        e.preventDefault();
        console.log(id)
        axios.delete("http://localhost:3001/administradores/" + id).then(function(){
            console.log("Borrado corectamente")
        }).catch(function(){
            console.error("No se ha eliminado")
        })
        window.location.href="/administrador"
    }

    useEffect(function(){
        axios.get("http://localhost:3001/administradores/" + id).then(function(datos){
            console.log(datos.data)
            setAdministrador(datos.data)
        }).catch(function(){
            console.error("Error")
        })
    },[])
    
    return(<div>
        <h1>{administrador.nombre}</h1>
        <p>{administrador.email}</p>
        <p>{administrador.contrasena}</p>
        <span>
        <Link to="/administrador">Volver</Link>
        </span>

        <span onClick={eliminarAdministrador} className=" text-red-500 cursor-pointer">
            Eliminar
        </span>
    </div>)
}