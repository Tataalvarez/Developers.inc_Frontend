import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query getProjects {
    getProjects {
      id
      titulo
      objGeneral
      objEspecifico
      presupuesto
      nombreLider
      identificacionLider
      estado
      fase
      fechaInicial
      fechaFinal
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($getProjectId: ID!) {
    getProject(id: $getProjectId) {
      id
      titulo
      objGeneral
      objEspecifico
      presupuesto
      nombreLider
      identificacionLider
      estado
      fase
      fechaInicial
      fechaFinal
    }
  }
`;

export const NEW_PROJECT = gql`
  mutation newProject($input: ProjectInput) {
    newProject(input: $input) {
      id
      titulo
      objGeneral
      objEspecifico
      presupuesto
      nombreLider
      identificacionLider
      estado
      fase
      fechaInicial
      fechaFinal
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject($updateProjectId: ID!, $input: ProjectInput) {
    updateProject(id: $updateProjectId, input: $input) {
      id
      titulo
      objGeneral
      objEspecifico
      presupuesto
      nombreLider
      identificacionLider
      estado
      fase
      fechaInicial
      fechaFinal
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($deleteProjectId: ID!) {
    deleteProject(id: $deleteProjectId)
  }
`;