import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Product() {

    const id = window.location.href.split("/")[4]
    
    const [producto, setProducto] = useState({});


    const eliminarProducto = function(e) {
        e.preventDefault();
        console.log(id)
        axios.delete("http://localhost:3001/productos/" + id).then(function(){
            console.log("Borrado corectamente")
        }).catch(function(){
            console.error("No se ha eliminado")
        })
        window.location.href="/productos"
    }

    useEffect(function(){
        axios.get("http://localhost:3001/productos/" + id).then(function(datos){
            console.log(datos.data)
            setProducto(datos.data)
        }).catch(function(){
            console.error("Error")
        })
    },[])
    
    return(<div>
        <h1>{producto.nombre}</h1>
        <p>{producto.precio}</p>
        <p>{producto.descripcion}</p>
        <span>{producto.stock}</span>
        <img src={"https://images.samsung.com/es/smartphones/galaxy-s22-ultra/buy/02_carousel/04_basic-colors/s22_ultra_productkv_burgundy_mo.jpg"}/>
        <span>
        <Link to="/productos">Volver</Link>
        </span>

        <span onClick={eliminarProducto} className=" text-red-500 cursor-pointer">
            Eliminar
        </span>
    </div>)
}