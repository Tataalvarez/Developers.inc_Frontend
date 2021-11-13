import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/Registro.css";

const Registro = () => {
  /* En las variables email, password, nombre, apellido se almacenan los datos del login. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
	
  /* La función submit hace que los datos sean enviados a algun lugar. */
  const submit = () => {
    console.log(nombre, apellido, email, password);
  };

  return (
    <div className="registro-container form-type">
      <h1>Registrarse</h1>

      <label htmlFor="nombre">Nombre</label>

      <input
        type="text"
        id="nombre"
        onChange={(ev) => setNombre(ev.target.value)}
      />

      <label htmlFor="apellido">Apellido</label>

      <input
        type="text"
        id="apellido"
        onChange={(ev) => setApellido(ev.target.value)}
      />

      <label htmlFor="email"> Correo Electrónico</label>

      <input
        type="email"
        id="email"
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <label htmlFor="password">Contraseña</label>

      <input
        type="password"
        id="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />

      <Button
        onClick={submit}
        linkTo=""
        buttonStyle="btnToLogin"
        buttonSize="btnSizeLogin"
      >
        REGISTRARSE
      </Button>

      <p>
        <Link to="/Login" className="soswachin">
          Ya tienes una cuenta? Ingresá
        </Link>
      </p>
    </div>
  );
};

export default Registro;