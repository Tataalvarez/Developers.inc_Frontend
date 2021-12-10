// Modulos
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Componentes
import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";

export default function Navigation() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Switch>
      </Layout>
    </Router>
  );
}