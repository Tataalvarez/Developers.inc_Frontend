import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { GET_ADVANCES } from "../graphql/advances";
import Advances from "./Advances";

export default function Advances(){
    


  return (
    <Fragment>
      {loading ? <p>Cargando...</p> : <ul>{renderUsers()}</ul>}
    </Fragment>
  );
};