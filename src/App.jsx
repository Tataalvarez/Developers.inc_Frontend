import React, { useState, useEffect } from "react";
import PrivateLayout from "layouts/PrivateLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from "./components/Navbar.jsx";
import { UserContext } from "context/userContext";
import Index from "pages/Index";
import Perfil from "pages/Perfil";
import Usuarios from "pages/Usuarios";
import Proyectos from "pages/Proyectos";
// import Login from 'pages/Login';
// import Registro from 'pages/Registro';
import Auth from "pages/auth/Auth.jsx";
import "styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "config/apollo.js";

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  const [showNav, setShowNav] = useState(true);

  /* Oculta la navbar en las rutas que no tenga que estar */
  const toggleNav = (options) => {
    setShowNav(options);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!showNav) {
      if (!navbar.classList.contains("navbar-hide")) {
        navbar.classList.add("navbar-hide");
      }
    } else {
      if (navbar.classList.contains("navbar-hide")) {
        navbar.classList.remove("navbar-hide");
      }
    }
  });

  return (
    <ApolloProvider client={client}>
      <Auth0Provider domain="" clientId="" redirectUri="" audience="">
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Navbar showNav={(state) => toggleNav(state)} />
            <Routes>
              <Route path="/" element={<PrivateLayout />}>
                <Route path="" element={<Index />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="proyectos" element={<Proyectos />} />
                <Route path="login" element={<Auth />} />
                {/* <Route path='registro' element={<Registro />} /> */}
              </Route>
            </Routes>
          </Router>
        </UserContext.Provider>
      </Auth0Provider>
    </ApolloProvider>
  );
}

export default App;
