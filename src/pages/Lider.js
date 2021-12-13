import React from 'react'
// import { useParams } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Perfil from '../components/Perfil';

export default function Lider(props) {
  const {auth} = useAuth();
  // const {email, id} = useParams();
  // console.log(auth.email)
  return (
    <>
      <Perfil email={auth.email}/>
      <p>Bienvenido {auth.nombre}, estas dentro del modulo de {auth.rol}</p>
    </>
  )
}
