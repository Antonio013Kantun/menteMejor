import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

export default function UpdateAdministradores() {
  const id = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
  });

  const [emailError, setEmailError] = useState("");

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

    if (!formulario.email.includes("@")) {
      setEmailError("El email debe contener un arroba (@)");
      return;
    } else {
      setEmailError("");
    }


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
   



<div className="flex justify-center items-center h-screen">
<div className="md:w-1/3 lg:w-2/1">
  <table className="w-full bg-white border border-gray-300 rounded-lg">
    <thead>
      <tr>
        <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Actualizar administrador</th>
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
          placeholder="Nombre del administrador"
          onChange={handleChange}
          value={formulario.nombre}/>
            </Form.Group>
            
            {emailError && (
                      <p className="text-red-500 mt-1 text-sm">{emailError}</p>
                    )}

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text"
          name="email"
          placeholder="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          required
          onChange={handleChange}
          value={formulario.email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Contrasena</Form.Label>
              <Form.Control type="password"
          name="contrasena"
          placeholder="contrasena"
          onChange={handleChange}
          value={formulario.contrasena} />
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
