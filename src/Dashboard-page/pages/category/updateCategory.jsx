import axios from "axios";
import { useEffect, useState } from "react";

export default function UpdateCategory() {
  const id = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: ""
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3001/categorias/" + id)
      .then(function (dato) {
        const info = dato.data;
        setFormulario({
          nombre: info.nombre
        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    const categoria = JSON.stringify(formulario);
    console.log(categoria);
    axios
      .put("http://localhost:3001/categorias/" + id, categoria, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Categoria agregada");
        //go to products page
        window.location.href = "/categorias";
      })
      .catch(function () {
        console.error("Error");
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Actualizar categorias</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la categoria"
          onChange={handleChange}
          value={formulario.nombre}
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
