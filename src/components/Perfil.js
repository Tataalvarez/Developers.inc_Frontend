import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/user";
import avatar from "./assets/avatar.png";
import PerfilUserModal from './modals/PerfilUserModal'

export default function Perfil(props) {
  const { email } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      email,
    },
  });
  if (loading) return null;
  if (error) return <p>Usuario no encontrado</p>;
  const { getUser } = data;
  // console.log(getUser);

  // function capitalize(word) {
  //   return word[0].toUpperCase + word.slice(1).toLowerCase()
  // }

  return (
    <div className="grid grid-cols-4 gap-4 items-center bg-blue-100 border-l-5 text-black p-6 content-center">
      <div className="justify-self-end">
        <img
          className="col-span-2 object-cover w-32 rounded-full p-1 border-2 border-blue-800 cursor-pointer"
          src={avatar}
          alt="avatar"
        />
      </div>
      <div className="col-span-2 justify-self-start">
        {/* <div>HeaderPerfil</div> */}
        <div className="LowerCase">
          <p className="mb-0 uppercase"><span className="font-bold capitalize">nombre:</span> {getUser.nombre+" "+getUser.apellido}</p>
          <p className="mb-0 uppercase"><span className="font-bold capitalize">identificacion:</span> {getUser.identificacion}</p>
          <p className="mb-0"><span className="font-bold capitalize">email:</span> {getUser.email}</p>
          <p className="mb-0 uppercase"><span className="font-bold capitalize">estado:</span> {getUser.estado}</p>
          <p><span className="font-bold capitalize">rol:</span> {getUser.rol}</p>
        </div>
        {/* <div>Publicaciones</div> */}
        <PerfilUserModal getUser={getUser}/>
      </div>
    </div>
  );
}
