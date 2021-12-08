import { gql } from '@apollo/client';

export const GET_ADVANCES = gql`
query getAdvances {
  getAdvances {
        id
        fecha
        descripcion
        observaciones
        proyecto
        creadoPor
    }
}
`;

export const NEW_ADVANCE = gql`
mutation newAdvance($input: AdvanceInput) {
  newAdvance(input: $input) {
    id
    fecha
    descripcion
    observaciones
    proyecto
    creadoPor
  }
}
`;

export const UPDATE_ADVANCES = gql`
mutation UpdateAdvance($updateAdvanceId: ID!, $input: AdvanceInput) {
    updateAdvance(id: $updateAdvanceId, input: $input) {
      id
      fecha
      descripcion
      observaciones
      proyecto
      creadoPor
    }
  }
  `;

export const DELETE_ADVANCES = gql`
mutation Mutation($deleteAdvanceId: ID!) {
    deleteAdvance(id: $deleteAdvanceId)
  }
  `;

 