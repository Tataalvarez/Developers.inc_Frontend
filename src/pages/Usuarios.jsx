import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_USERS } from "../graphql/login";
import Usuario from "./Usuario";

const Usuarios = () => {
  const { loading, data } = useQuery(GET_USERS);
  function renderUsers() {
    return data.getUsers.map((user) => {
      return <Usuario key={user.id} name={user.nombre}></Usuario>;
    });
  }

  return (
    <Fragment>
      {loading ? <p>Cargando...</p> : <ul>{renderUsers()}</ul>}
    </Fragment>
  );
};

export default Usuarios;
