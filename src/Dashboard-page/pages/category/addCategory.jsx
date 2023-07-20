import axios from "axios";
import { useEffect, useState } from "react";

export default function AddCategory() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const categoria = JSON.stringify(formulario);
    console.log(categoria)
    axios.post("http://localhost:3001/categorias", categoria, {
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(){
        console.log("Categoria agregada")
    }).catch(function(){
        console.error("Error")
    })

    //go to products page
    window.location.href = "/categorias";

  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Add Categoria</h1>

      <form className="flex flex-col">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la categoria"
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
