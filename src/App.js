// Modulos
import React, { useState, useEffect, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";

// Componentes
import client from './config/apollo';
import { getToken, decodeToken, removeToken } from "./utils/token";
import AuthContext from "./context/AuthContext";
import Auth from "./pages/Auth";
import Louding from "./components/Louding";

export default function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuth(null);
    } else {
      setAuth(decodeToken(token));
    }
  }, []);

  const logout = () => {
    removeToken();
    setAuth(null);
  };

  const setUser = (user) => {
    setAuth(user);
  };
  // console.log(setUser);

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Louding auth={auth}/>}
      </AuthContext.Provider>
    </ApolloProvider>
  );
}
