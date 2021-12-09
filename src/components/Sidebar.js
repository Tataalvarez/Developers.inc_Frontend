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
        <li className={location.pathname === "/home" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/home" className="text-white">
            Home
          </NavLink>
        </li>
        <li className={location.pathname === "/perfil" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/perfil" className="text-white">
            Perfil
          </NavLink>
        </li>
        <li className={location.pathname === "/listarproyectoslider" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/listarproyectoslider" className="text-white">
            ListarProyectosLider
          </NavLink>
        </li>
        <li className={location.pathname === "/listarproyectosadministrador" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/listarproyectosadministrador" className="text-white">
            ListarProyectosAdministrador
          </NavLink>       
        </li>
        <li className={location.pathname === "/listarproyectosestudiantes" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/listarproyectosestudiantes" className="text-white">
            ListarProyectosEstudiantes
          </NavLink>       
        </li>
        <li className={location.pathname === "/avances" ? "bg-blue-800 p-2 rounded" : "p-2"}>
          <NavLink to="/avances" className="text-white">
            Avances
          </NavLink>
        </li>
      </nav>
    </aside>
  );
}
