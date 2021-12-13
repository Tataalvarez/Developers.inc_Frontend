// Modulos
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Componentes
import Error404 from "../pages/Error404";
import Layout from "../components/Layout";
import Lider from "../pages/Lider";

export default function NavigationLider() {
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
          <Route path={`/${auth.nombre}/perfil`} element={<Lider auth={auth}/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}