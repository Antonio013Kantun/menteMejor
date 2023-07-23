import { Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import React from 'react'


export default function Register() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: "",
    direccion: "",
    ciudad: "",
    estado: "",
    pais: "",
  });

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");




  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [confirmarContrasenaError, setConfirmarContrasenaError] = useState("");


  const [registroExitoso, setRegistroExitoso] = useState(false);

  const handleConfirmarContrasenaChange = function (e) {
    setConfirmarContrasena(e.target.value);
  };

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = function (e) {
    e.preventDefault();


    // Registro exitoso, mostramos el mensaje y restablecemos el formulario
    setRegistroExitoso(true);
    setFormulario({
      nombre: "",
      email: "",
      contrasena: "",
      direccion: "",
      ciudad: "",
      estado: "",
      pais: "",
    });


    // Validar que las contraseñas coincidan
    if (formulario.contrasena !== confirmarContrasena) {
      setConfirmarContrasenaError("Las contraseñas deben coincidir");
      return;
    } else {
      setConfirmarContrasenaError("");
    }


// Validar que la contraseña tenga al menos 8 caracteres
if (formulario.contrasena.length < 8) {
  setPasswordError("La contraseña debe tener al menos 8 caracteres");
  return;
}

// Validar que la contraseña contenga al menos una letra y un número usando expresiones regulares
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
if (!passwordRegex.test(formulario.contrasena)) {
  setPasswordError("La contraseña debe contener al menos una letra y un número");
  return;
} else {
  setPasswordError("");
}

    if (!formulario.email.includes("@")) {
      setEmailError("El email debe contener un arroba (@)");
      return;
    } else {
      setEmailError("");
    }

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
    window.location.href = "/login";



  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-black">Regístrate</h1>
        <p className="text-xl text-black">Crea una cuenta para comprar</p>
        <span>
          <Link to={"/"}>Regresar al inicio</Link>
        </span>
      </div>

      <div className="flex flex-row items-center justify-center mt-8">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1615486364134-62a4c72c822d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Imagen"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-8">
          <form className="flex flex-col gap-4">

            <div className="flex flex-col">
              <label className="text-black mb-2">Nombre de usuario</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name='user-circle' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="text" placeholder="Nombre de usuario" name="nombre"  onChange={handleChange} />
              </div>
            </div>
            {emailError && (
                      <p className="text-red-500 mt-1 text-sm">{emailError}</p>
                    )}
            
            <div className="flex flex-col">
              <label className="text-black mb-2">Correo electrónico</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name='envelope' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="email" placeholder="Correo electrónico" name="email" onChange={handleChange}/>
              </div>
            </div>

            {passwordError && <p className="text-red-500 mt-1 text-sm">{passwordError}</p>}
            <div className="flex flex-col">
              <label className="text-black mb-2 ">Contraseña</label>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
                <box-icon name='lock' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="password" placeholder="Contraseña" name="contrasena"  onChange={handleChange}/>
              </div>
              <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md mt-2">
                <box-icon name='lock' type='solid' color="grey"></box-icon>
                <input className="border-none outline-none rounded-md bg-white text-black p-2" type="password" 
                 onChange={handleConfirmarContrasenaChange} placeholder="Confirmar contraseña" />
              </div>
            </div>
            {confirmarContrasenaError && (
          <p className="text-red-500 mt-1 text-sm">{confirmarContrasenaError}</p>
        )}
            <div className="flex justify-center">
              <button className="bg-black text-white rounded-md py-2 mt-2 w-full" type="submit"
                onClick={handleSubmit}>
                Regístrate
              </button>
            </div>
          </form>

          {registroExitoso && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">¡Registro exitoso!</strong> Puedes iniciar sesión ahora.
        </div>
      )}

          <p className="mt-4 font-bold text-black">
            ¿Ya tienes cuenta?{" "}
            <Link to={"/login"} className="text-blue-700">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
