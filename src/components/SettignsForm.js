import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useApolloClient } from "@apollo/client";
import useAuth from "../hooks/useAuth";
import avatar from "../components/assets/avatar.png";

export default function SettignsForm(props) {
  // console.log(data);
  const { setShowModal } = props;
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const client = useApolloClient();

  // const getUsername = (email) => {
  //   return email.substring(0, email.lastIndexOf("@"))
  // }

  // const username = getUsername(auth.email)

  const onLogout = () => {
    client.clearStore();
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-end">
      {/* <button>Cambiar contraseña</button> */}
      {/* <button>Cambiar email</button> */}
      {/* <button>Descripcion</button> */}
      <div className="mr-4">
        <Link to={`/${auth.email}`}>
          <img
            className="object-cover w-8 h-8 border-2 border-blue-800 rounded-full cursor-pointer"
            src={avatar}
            alt="avatar"
          />
        </Link>
      </div>
      <button className="btn-primary" onClick={onLogout}>
        Salir
      </button>
      {/* <button onClick={() => setShowModal(false)}>Cancelar</button> */}
    </div>
  );
}
