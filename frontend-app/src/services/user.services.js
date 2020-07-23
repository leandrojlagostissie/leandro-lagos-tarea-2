// import client from './graphql';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const link = createHttpLink({
    uri: 'http://localhost:3000/graphql/users',
    credentials: 'same-origin'
})

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export const getAllUsers = async () => {
    return client.query({
            query: gql`
                query {
                    getAllUsers {
                        id
                        userName
                        email
                    }
                }
            `,
            variables: null
    }).then(res => {
        return res.data.getAllUsers
    }).catch(err => {
        console.error(err)
    })
}

export const addUser = async ({ userName, email }) => {
    return client.mutate({
        mutation: gql`
            mutation addUser($userName: String, $email: String) {
                addUser(userName: $userName, email: $email) {
                    id
                    userName
                    email
                }
            }
        `,
        variables: {
            userName, email
        }
    }).then(res => {
        debugger
        return res.data.addUser
    }).catch(err => {
        console.error(err)
    })
}
export const updateUser = async ({ id, userName, email }) => {
    return client.mutate({
        mutation: gql`
            mutation updateUser($id: Int, $userName: String, $email: String) {
                updateUser(id: $id, userName: $userName, email: $email) {
                    id
                    userName
                    email
                }
            }
        `,
        variables: {
            id, userName, email
        }
    }).then(res => {
        debugger
        return res.data.updateUser
    }).catch(err => {
        console.error(err)
    })
}