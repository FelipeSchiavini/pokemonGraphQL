import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({ uri: 'https://dex-server.herokuapp.com/' });


const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });

  

export default client;