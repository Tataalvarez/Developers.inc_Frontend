import React from 'react'
import UserHome from '../components/user/UserHome';
import useAuth from '../hooks/useAuth'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/user'

export default function Home() {
  const [authUser, {data}] = useMutation(LOGIN, {
    variables: {
      email: data.authUser.email,
      password: data.authUser.password,
    }
  });
  const auth = useAuth()
  console.log(authUser);
  
  return (
    <div>
      {data.authUser.estado === "AUTORIZADO" ? <UserHome/> : <p>Comunicate con el administrador</p>}
    </div>
  )
}
