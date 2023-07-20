import { useEffect, useState } from "react";
import CardCategory from "../../components/cardCategory";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeCatalogs() {
  const [categorias, setCategorias] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/categorias")
      .then(function (datos) {
        setCategorias(datos.data);
      })
      .catch(() => {
        console.error("Hay un error");
      });
  },[]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-10">
      {categorias.map(function (categoria){
        return(
            <CardCategory
            key={categoria.id_categoria}
            id={categoria.id_categoria}
            nombre={categoria.nombre}
            />
        )
      })}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link to="/addCategory">
        <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}
