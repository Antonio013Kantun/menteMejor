import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateAdministradores() {
  const id = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3001/administradores/" + id)
      .then(function (dato) {
        const info = dato.data;
        setFormulario({
          nombre: info.nombre,
          email: info.email,
          contrasena: info.contrasena,

        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    const administrador = JSON.stringify(formulario);
    console.log(administrador);
    axios
      .put("http://localhost:3001/administradores/" + id, administrador, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Producto agregado");
        //go to products page
        window.location.href = "/administrador";
      })
      .catch(function () {
        console.error("Error");
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Actualizar Administrador</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del administrador"
          onChange={handleChange}
          value={formulario.nombre}
        />
        <label>email</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formulario.email}
        />
        
        <label>contrasena</label>
        <input
          type="text"
          name="contrasena"
          placeholder="contrasena"
          onChange={handleChange}
          value={formulario.contrasena}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-black text-white"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}
