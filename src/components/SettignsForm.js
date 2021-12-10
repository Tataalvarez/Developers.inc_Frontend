import React from 'react';
import { Redirect } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import useAuth from '../hooks/useAuth';

export default function SettignsForm(props) {
  const { setShowModal } = props;
  // const navigate = useNavigate();
  const client = useApolloClient();
  const { logout } = useAuth();

  const onLogout = () => {
    client.clearStore();
    logout();
    <Redirect to={{pathname: '/'}}/>
    // navigate("/");
  };

  return (
    <div>
      {/* <button>Cambiar contraseña</button> */}
      {/* <button>Cambiar email</button> */}
      {/* <button>Descripcion</button> */}
      <button onClick={onLogout}>Salir</button>
      {/* <button onClick={() => setShowModal(false)}>Cancelar</button> */}
    </div>
  )
}
