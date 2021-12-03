// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import User from "../pages/auth/User";
import NewProject from "../pages/projects/NewProject";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import DataProyectos from "../pages/projects/DataProyectos";
import ListProject from "../pages/projects/ListProject";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/projects" element={<DataProyectos />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/listarproyectos" element={<ListProject />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
