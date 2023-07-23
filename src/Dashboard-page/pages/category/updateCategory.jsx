import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";


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
   

    

<div className="flex justify-center items-center h-screen">
<div className="md:w-1/3 lg:w-2/1">
  <table className="w-full bg-white border border-gray-300 rounded-lg">
    <thead>
      <tr>
        <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Actualizar categoria</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-4 px-6">
          <Form>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text"
          name="nombre"
          placeholder="Nombre de la categoria"
          onChange={handleChange}
          value={formulario.nombre}/>
            </Form.Group>
          
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Agregar
              </button>
            </div>
          </Form>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div> 
  );
}
