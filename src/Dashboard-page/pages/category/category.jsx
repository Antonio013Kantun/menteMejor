import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Category() {

    const id = window.location.href.split("/")[4]
    
    const [categoria, setCategoria] = useState({});


    const eliminarCategoria = function(e) {
        e.preventDefault();
        console.log(id)
        axios.delete("http://localhost:3001/categorias/" + id).then(function(){
            console.log("Borrado corectamente")
        }).catch(function(){
            console.error("No se ha eliminado")
        })
        window.location.href="/categorias"
    }

    useEffect(function(){
        axios.get("http://localhost:3001/categorias/" + id).then(function(datos){
            console.log(datos.data)
            setCategoria(datos.data)
        }).catch(function(){
            console.error("Error")
        })
    },[])
    
    return(<div>
        <h1>{categoria.nombre}</h1>
    
        <span>
        <Link to="/categorias">Volver</Link>
        </span>

        <span onClick={eliminarCategoria} className=" text-red-500 cursor-pointer">
            Eliminar
        </span>
    </div>)
}