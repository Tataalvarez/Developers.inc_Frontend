// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import Leader from "../pages/Advances/Leader";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/leader" element={<Leader />} />
        </Routes>
      </Layout>
    </Router>
  );
}
