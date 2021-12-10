import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  let location = useLocation();
  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div>
        <p className="text-white font-extrabold text-xl">Developers.Inc</p>
      </div>
      <nav className="mt-5 list-none">
        <li className={location.pathname === "/lider" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/lider/home" className="text-white">
            Home
          </NavLink>
        </li>
        <li className={location.pathname === "/lider/profile" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/lider/profile" className="text-white">
            Perfil
          </NavLink>
        </li>
        <li className={location.pathname === "/lider/proyectos" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/lider/proyectos" className="text-white">
            Proyectos
          </NavLink>
        </li>
        <li className={location.pathname === "/lider/observaciones" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/lider/observaciones" className="text-white">
            Observaciones
          </NavLink>
        </li>
      </nav>
    </aside>
  );
}