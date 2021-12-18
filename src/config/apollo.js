import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
const PORT = process.env.PORT || 3000;
// import fetch from 'node-fetch';

const httpLink = createHttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;
