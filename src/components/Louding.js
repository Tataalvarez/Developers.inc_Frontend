import React from 'react';
import Home from '../pages/Home';
import NavigationUser from '../routes/NavigationUser';
import NavigationAdmin from '../routes/NavigationAdmin';
import NavigationLider from '../routes/NavigationLider';

export default function Louding(props) {
  const { auth } = props;
  if (auth.estado === "AUTORIZADO" && auth.rol === "ESTUDIANTE") {
    return <NavigationUser/>
  } else if (auth.estado == "AUTORIZADO" && auth.rol === "ADMINISTRADOR") {
    return <NavigationAdmin/>
  } else if (auth.estado == "AUTORIZADO" && auth.rol === "LIDER") {
    return <NavigationLider/>
  } else {
    <Home />
  }

  return (
    <>
      {/* <div className=''>Louding...</div> */}
      {/* {(auth.estado === "AUTORIZADO" && auth.rol === "ADMINISTRADOR") ? <Home /> : <NavigationUser/>} */}
    </>
  )
}
