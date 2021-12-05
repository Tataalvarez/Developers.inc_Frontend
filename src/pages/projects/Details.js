import React from "react";

export default function Details({ project }) {
  return (
    <div className="px-4">
      <h2 className="text-blue-800 font-bold text-2xl"> {project.titulo}</h2>
    </div>
  );
}