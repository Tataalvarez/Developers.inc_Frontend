import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
// import { useLocation } from "react-router";
import Header from "./Header";

// Componentes
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  // let location = useLocation();
  return (
    <Fragment>
      <Helmet>
        <title>Ciclo 4 - Desarrollo Web</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Helmet>

      {/* {location.pathname === '/login' ? (
        <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
          <div>
            {children}
          </div>
        </div>
      ) : ( */}
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">
            <Header/>
            {children}
          </main>
        </div>
      </div>
      {/* )}; */}
    </Fragment>
  );
}
