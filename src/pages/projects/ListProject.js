import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_PROJECTS } from "../../graphql/project";
import Project from "./Project";
import CreateProject from "./CreateProject";
import Details from "./Details";

export default function Projects() {
  const { loading, data } = useQuery(GET_PROJECTS);
  const [projectDetails, setProjectDetails] = useState(null);

  function handleCallback(project) {
    setProjectDetails(project);
  }

  function renderProjects ()  {
    return data.projects.data.map((project) => {
      return (
        <Project
          key={project._id}
          titulo={project.titulo}
          objEspecifico={project.objEspecifico}
          presupuesto={project.presupuesto}
          nombreLider={project.nombreLider}
          identificacionLider={project.identificacionLider}
          estado={project.estado}
          fase={project.fase}
          fechaInicial={project.fechaInicial}
          clickCallback={handleCallback}
        ></Project>
      );
    });
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>cargando.....</p>
      ) : (
        <div className="flex">
          <div className="w-6/12">
            <ul className="text-blue-500">{renderProjects()}</ul>
            <CreateProject></CreateProject>
          </div>
          <div className="w-6/12">
            {projectDetails && <Details project={projectDetails}></Details>}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}













