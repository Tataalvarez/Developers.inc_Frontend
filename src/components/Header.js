import React from "react";
import SettignsForm from "./SettignsForm";

export default function Header() {
  return (
    <div className="flex justify-between bg-blue-300 border-b-5 text-black p-6">
      <div>Correo</div>
      <div>Buscador</div>
      <div>
        <SettignsForm />
      </div>
    </div>
  );
}
