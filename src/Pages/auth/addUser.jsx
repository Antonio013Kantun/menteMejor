import React from 'react'
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function addUser() {

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
    
      const handleChange = function (e) {
        setFormulario({
          ...formulario,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = function (e) {
        e.preventDefault();
    
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
        window.location.href = "/clientes";
    
    
    
      };
    


  return (
    <>
      
    </>
  )
}

export default addUser
