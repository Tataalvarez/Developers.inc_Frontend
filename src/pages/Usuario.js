import React from "react";
// import { useLocation, useParams } from "react-router";

export default function Usuario({ nombre, username}) {
  // let { name } = useParams();
  // let location = useLocation();
  // console.log(location);

  return (
    <div>
      <h2 className="text-xl text-gray-800">Perfil del Usuario</h2>
      <p>Nombre: {nombre} </p>
      <p>Username: {username}</p>
      <p>Mostrando usuarios del <b>1</b> al <b>20</b></p>
      <button>Atras</button>
      <button>Adelante</button>
    </div>
  );
}
