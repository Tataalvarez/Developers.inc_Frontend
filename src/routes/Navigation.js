// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import ListProjectsAdmin from "../pages/projects/ListProjectsAdmin";
import ListProjectsStudents from "../pages/projects/ListProjectsStudents";
import ListProjectsLeader from "../pages/projects/ListProjectsLeader";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/listarproyectoslider" element={<ListProjectsLeader />} />
          <Route path="/listarproyectosadministrador" element={<ListProjectsAdmin />} />
          <Route path="/listarproyectosestudiantes" element={<ListProjectsStudents />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}