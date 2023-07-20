import { useEffect, useState } from "react";
import CardCatalogs from "../../components/cardAdministrador";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeCatalogs() {
  const [administradores, setAdministradores] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/administradores")
      .then(function (datos) {
        setAdministradores(datos.data);
      })
      .catch(() => {
        console.error("camara, hay un error");
      });
  },[]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-10">
      {administradores.map(function (administrador){
        return(
            <CardCatalogs
            key={administrador.id_administrador}
            id={administrador.id_administrador}
            nombre={administrador.nombre}
            email={administrador.email}
            contrasena={administrador.contrasena}
            />
        )
      })}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link to="/addAdministrador">
        <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}
