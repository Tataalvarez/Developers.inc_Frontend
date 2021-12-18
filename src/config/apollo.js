import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
const PORT = process.env.PORT || 3000;
// import fetch from 'node-fetch';

const httpLink = createHttpLink({
  uri: "https://git.heroku.com/vast-cliffs-02417.git"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;