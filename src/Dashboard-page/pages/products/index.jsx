import { useEffect, useState } from "react";
import CardCatalogs from "../../components/cardCatalogs";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeCatalogs() {
  const [productos, setProductos] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/productos")
      .then(function (datos) {
        setProductos(datos.data);
      })
      .catch(() => {
        console.error("camara, hay un error");
      });
  },[]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-10">
      {productos.map(function (producto){
        return(
            <CardCatalogs
            key={producto.id_producto}
            id={producto.id_producto}
            nombre={producto.nombre}
            imagen={"https://definicion.de/wp-content/uploads/2009/06/producto.png"}
            precio={producto.precio}
            descripcion={producto.descripcion}
            />
        )
      })}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link to="/addProducts">
        <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}
