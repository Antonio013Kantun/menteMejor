import axios from "axios";
import { useEffect, useState } from "react";

export default function AddClients() {

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

  const handleSubmit = function (e) {
    e.preventDefault();
    const cliente = JSON.stringify(formulario);
    console.log(cliente)
    axios.post("http://localhost:3001/clientes", cliente, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(){
        console.log("Producto agregado")
    }).catch(function(){
        console.error("Error")
    })

    //go to products page
    window.location.href = "/clientes";



  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Add Clientes</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          onChange={handleChange}
        />
        <label>email</label>
        <input
          type="text"
          name="email"
          placeholder="Ingrese el correo"
          onChange={handleChange}
        />
        <label>Contrasena</label>
        <input
          type="text"
          name="contrasena"
          placeholder="contrasena mayor de 8 caracteres"
          onChange={handleChange}
        />
        <label>Direccion</label>
        <input
          type="text"
          name="direccion"
          placeholder="Ingrese la direccion del cliente"
          onChange={handleChange}
        />
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          placeholder="Ingrese la ciudad"
          onChange={handleChange}
        />
        <label>Estado</label>
        <input
          type="text"
          name="estado"
          placeholder="Ingrese el estado"
          onChange={handleChange}
        />
        <label>Pais</label>
        <input
          type="text"
          name="pais"
          placeholder="Ingrese el pais"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-black text-white"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}
