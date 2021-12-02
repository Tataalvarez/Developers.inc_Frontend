import React from "react";
// import { useLocation, useParams } from "react-router";

export default function Usuario({ nombre, apellido}) {
  // let { name } = useParams();
  // let location = useLocation();
  // console.log(location);

  return (
    <div>
      <h2 className="text-xl text-gray-800">Perfil del Usuario</h2>
      <p>Nombre: {nombre} </p>
      <p>Apellido: {apellido}</p>
    </div>
  );
}
