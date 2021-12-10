import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import useAuth from '../hooks/useAuth';

export default function SettignsForm(props) {
  const { setShowModal } = props;
  const navigate = useNavigate();
  const client = useApolloClient();
  const { logout } = useAuth();

  const onLogout = () => {
    client.clearStore();
    logout();
    navigate("/");
  };

  return (
    <div>
      {/* <button>Cambiar contraseña</button> */}
      {/* <button>Cambiar email</button> */}
      {/* <button>Descripcion</button> */}
      <button onClick={onLogout}>Cerrar Sesion</button>
      {/* <button onClick={() => setShowModal(false)}>Cancelar</button> */}
    </div>
  )
}
