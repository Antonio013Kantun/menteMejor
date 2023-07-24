import { useEffect, useState } from "react";
import CardCatalogs from "../../Dashboard-page/components/cardCatalogs";
import axios from "axios";

export default function ProductosDestacados() {
    const [productos, setProductos] = useState([]);

    useEffect(function() {
        axios
        .get("http://localhost:3001/api/productos")
        .then(function (datos) {
            setProductos(datos.data);
        })
        .catch(() => {
            console.error("camara hay un error");
        });
    },[]);
    return (
        <div>
            <h1>Productos destacados</h1>
            <div className="grid grid-cols-4 gap-4"> 
            {productos.map(function (producto){
            return(
                <CardCatalogs
                key={producto.id}
                nombre={producto.nombre}
                />
            )
            })}
            </div>
        </div>
    );
}