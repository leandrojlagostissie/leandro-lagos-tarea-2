import { ApolloClient, InMemoryCache } from '@apollo/client';
import enviroment from '../enviroment.json'

const client = new ApolloClient({
    uri: enviroment.graphqlUri,
    cache: new InMemoryCache()
  });

export default client
