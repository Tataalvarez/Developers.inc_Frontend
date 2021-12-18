import React, {useEffect} from 'react'
import { toast } from "react-toastify";
import { useQuery } from "@apollo/client";
import { GET_ADVANCES } from "../../../graphql/advances";

const Tableleader = () => {
  const { data, error } = useQuery(GET_ADVANCES);
  
    useEffect(() => {
      console.log("data servidor", data);
    }, [data]);
  
    useEffect(() => {
      if (error) {
        toast.error("Error consultando los avances");
      }
    }, [error]);

    return (
      <table className="table table-bordered table-striped table-hover table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Fecha</th>
            <th scope="col">Descripción</th>
            <th scope="col">Observaciones</th>
            <th scope="col">Proyecto</th>
            <th scope="col">Creado por</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
            {data && data.getAdvances.map((avance)=> ( 
                <tr key={avance.id}>
                <td>{avance.id}</td>
                <td>{avance.fecha}</td>
                <td>{avance.descripcion}</td>
                <td>{avance.observaciones}</td>
                <td>{avance.proyecto}</td>
                <td>{avance.creadopor}</td>
                </tr> 

            ))}

        </tbody>
      </table>
    );
  };
  export default Tableleader;