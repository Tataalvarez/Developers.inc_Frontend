import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      nombre
      apellido
      identificacion
      email
      rol
      createdAt
    }
  }
`;

export const GET_USER = gql`
  query getUser($email: String) {
    getUser(email: $email) {
      nombre
      apellido
      email
      rol
      identificacion
      estado
      createdAt
      id
    }
  }
`;

export const NEW_USER = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      nombre
      apellido
      identificacion
      email
      rol
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
    }
  }
`;
