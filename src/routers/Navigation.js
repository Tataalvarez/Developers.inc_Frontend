// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import User from "../pages/auth/User";
import Projects from "../pages/projects/Projects";
import NewProject from "../pages/projects/NewProject";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
