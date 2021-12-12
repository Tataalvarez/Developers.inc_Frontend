// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Componentes
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import ListProjectsAdmin from "../pages/projects/ListProjectsAdmin";
import ListProjectsStudents from "../pages/projects/ListProjectsStudents";
import ListProjectsLeader from "../pages/projects/ListProjectsLeader";

export default function Navigation() {
  const { auth } = useAuth();
  // console.log(auth.email)
  // const getUsername = (email) => {
  //   return email.substring(0, email.lastIndexOf("@"))
  // }
  // const username = getUsername(email)
  // console.log(username)

  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path={`/${auth.nombre}/home`} element={<Home />} /> */}
          <Route path={`/${auth.nombre}/perfil`} element={<User />} />
          <Route path="/listarproyectoslider" element={<ListProjectsLeader />} />
          <Route path="/listarproyectosadministrador" element={<ListProjectsAdmin />} />
          <Route path="/listarproyectosestudiantes" element={<ListProjectsStudents />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}