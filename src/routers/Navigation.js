// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Usuarios from "../pages/Usuarios";
import Avances from "../pages/Advances";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/users" element={<Usuarios />} />
          <Route path="/advances" element={<Avances />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
