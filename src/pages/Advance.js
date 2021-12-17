import React from "react";
// import { useLocation, useParams } from "react-router";

export default function Usuario({ id, fecha, descripcion}) {
  // let { name } = useParams();
  // let location = useLocation();
  // console.log(location);

  return (
    <div>
      <h2 className="text-xl text-gray-800">Perfil del Usuario</h2>
      <p>Nombre: {id} </p>
      <p>Apellido: {fecha}</p>
      <p>Apellido: {descripcion}</p>
    </div>
  );
}