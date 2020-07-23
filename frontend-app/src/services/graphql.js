import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import enviroment from '../enviroment.json'

const link = createHttpLink({
  uri: enviroment.graphqlUri ,
  credentials: 'same-origin'
})

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


export default client
