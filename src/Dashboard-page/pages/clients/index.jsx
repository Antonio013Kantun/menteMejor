import { useEffect, useState } from "react";
import CardClient from "../../components/cardClient";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomeCatalogs() {
  const [clientes, setClientes] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/clientes")
      .then(function (datos) {
        setClientes(datos.data);
      })
      .catch(() => {
        console.error("camara, hay un error");
      });
  },[]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-8 px-10">
      {clientes.map(function (cliente){
        return(
            <CardClient
            key={cliente.id_cliente}
            id={cliente.id_cliente}
            nombre={cliente.nombre}
            email={cliente.email}
            contrasena={cliente.contrasena}
            direccion={cliente.direccion}
            ciudad={cliente.ciudad}
            estado={cliente.estado}
            pais={cliente.pais}
            />
        )
      })}
      </div>

      <div className="fixed bg-green-600 bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:h-20 hover:w-20 transition-all">
        <Link to="/addClient">
        <span className="text-white text-2xl">+</span>
        </Link>
      </div>
    </div>
  );
}
