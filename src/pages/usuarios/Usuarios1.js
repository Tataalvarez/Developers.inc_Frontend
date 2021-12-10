import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_USERS } from "../graphql/user";
import Usuario from "./Usuario";

export default function Usuarios(){
  const { loading, data } = useQuery(GET_USERS);

  function renderUsers() {
    return data.getUsers.map((user) => {
      return <Usuario key={user.id} username={user.username} nombre={user.nombre}></Usuario>;
    });
  }

  return (
    <Fragment>
      {loading ? <p>Cargando...</p> : <ul>{renderUsers()}</ul>}
    </Fragment>
  );
};
