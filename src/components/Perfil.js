import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/user'

export default function Perfil(props) {
  const { email } = props;
  const {data, error} = useQuery(GET_USER, {
    variables: {
      email
    }
  });
  console.log(data);
  console.log(error);

  return (
    <div>
      <h2>Desde Perfil...</h2>
    </div>
  )
}
