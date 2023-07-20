import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateClients() {
  const id = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    direccion: "",
    ciudad: "",
    estado: "",
    pais: "",
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3001/clientes/" + id)
      .then(function (dato) {
        const info = dato.data;
        setFormulario({
          nombre: info.nombre,
          email: info.email,
          contrasena: info.contrasena,
          direccion: info.direccion,
          ciudad: info.ciudad,
          estado: info.estado,
          pais: info.pais,
        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    const cliente = JSON.stringify(formulario);
    console.log(cliente);
    axios
      .put("http://localhost:3001/clientes/" + id, cliente, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Producto agregado");
        //go to products page
        window.location.href = "/clientes";
      })
      .catch(function () {
        console.error("Error");
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Actualizar Clientes</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          onChange={handleChange}
          value={formulario.nombre}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Ingrese el correo"
          onChange={handleChange}
          value={formulario.email}
        />
       
       <label>Contrasena</label>
        <input
          type="text"
          name="contrasena"
          placeholder="contrasena mayor de 8 caracteres"
          onChange={handleChange}
          value={formulario.contrasena}
        />
        <label>Direccion</label>
        <input
          type="text"
          name="direccion"
          placeholder="Ingrese la direccion del cliente"
          onChange={handleChange}
          value={formulario.direccion}
        />
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          placeholder="Ingrese la ciudad"
          onChange={handleChange}
          value={formulario.ciudad}
        />
        <label>Estado</label>
        <input
          type="text"
          name="estado"
          placeholder="Ingrese el estado"
          onChange={handleChange}
          value={formulario.estado}
        />
        <label>Pais</label>
        <input
          type="text"
          name="pais"
          placeholder="Ingrese el pais"
          onChange={handleChange}
          value={formulario.pais}
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
