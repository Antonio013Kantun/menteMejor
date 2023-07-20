import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateProducts() {
  const id = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3001/productos/" + id)
      .then(function (dato) {
        const info = dato.data;
        setFormulario({
          nombre: info.nombre,
          descripcion: info.descripcion,
          precio: info.precio,
          stock: info.stock,
          imagen: info.imagen,
        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    const producto = JSON.stringify(formulario);
    console.log(producto);
    axios
      .put("http://localhost:3001/productos/" + id, producto, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Producto agregado");
        //go to products page
        window.location.href = "/productos";
      })
      .catch(function () {
        console.error("Error");
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Actualizar productos</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          onChange={handleChange}
          value={formulario.nombre}
        />
        <label>Descripcion</label>
        <input
          type="text"
          name="descripcion"
          placeholder="Descripcion del producto"
          value={formulario.descripcion}
        />
        <label>Precio</label>
        <input
          type="number"
          name="precio"
          placeholder="Precio del producto"
          onChange={handleChange}
          value={formulario.precio}
        />
        <label>Imagen</label>
        <input
          type="text"
          name="imagen"
          placeholder="Imagen del producto"
          onChange={handleChange}
          value={formulario.imagen}
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
