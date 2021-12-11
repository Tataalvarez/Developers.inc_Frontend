import { gql } from "@apollo/client";

export const GET_INSCRIPTIONS = gql`
  query getInscriptions {
    getInscriptions {
      id
      identificador_estudiante
      identificador_proyecto
      estado
      fecha_ingreso
      fecha_ingreso
    }
  }
`;

export const GET_INSCRIPTION = gql`
  query getInscription($getInscriptionId: ID!) {
    getInscription(id: $getInscriptionId) {
      id
      identificador_estudiante
      identificador_proyecto
      estado
      fecha_ingreso
      fecha_ingreso
    }
  }
`;

export const NEW_INSCRIPTION = gql`
  mutation newInscription($input: InscriptionInput) {
    newInscription(input: $input) {
      id
      identificador_estudiante
      identificador_proyecto
      estado
      fecha_ingreso
      fecha_ingreso
    }
  }
`;

export const UPDATE_INSCRIPTION = gql`
  mutation updateInscriptionProject($updateInscriptionId: ID!, $input: InscriptionInput) {
    updateInscription(id: $updateInscriptionId, input: $input) {
      id
      identificador_estudiante
      identificador_proyecto
      estado
      fecha_ingreso
      fecha_ingreso
    }
  }
`;

export const DELETE_INSCRIPTION = gql`
  mutation deleteInscription($deleteInscriptionId: ID!) {
    deleteInscription(id: $deleteInscriptionId)
  }
`;