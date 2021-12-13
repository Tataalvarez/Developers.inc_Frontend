import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import Admin from "../pages/Admin";
import Lider from "../pages/Lider";
import Perfil from "./Perfil";

export default function Loading(props) {
  const { auth } = props;
  // console.log(auth)

  if (auth.estado === "AUTORIZADO" && auth.rol === "ESTUDIANTE") {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<User />} />
            <Route path={`/${auth.nombre}/perfil`} element={<Perfil email={auth.email}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>
    );
  } else if (auth.estado === "AUTORIZADO" && auth.rol === "ADMINISTRADOR") {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<Admin />} />
            <Route path={`/${auth.nombre}/perfil`} element={<Perfil email={auth.email}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>
    );
  } else if (auth.estado === "AUTORIZADO" && auth.rol === "LIDER") {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/home" element={<Lider />} />
            <Route path={`/${auth.nombre}/perfil`} element={<Perfil email={auth.email}/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </Router>
    );
  }

  return (
    <>
      <Home />
    </>
  );
}
