import client from './graphql';
import { gql } from '@apollo/client';


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
    }).then(res => res.data.getAllUsers)
}

export const addUser = async ({ userName, email }) => {
    return client.mutate({
        mutation: gql`
            mutation addUser($userName: String!, $email: String!) {
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
    }).then(res => res.data.addUser)
}
export const updateUser = async ({ id, userName, email }) => {
    return client.mutate({
        mutation: gql`
            mutation updateUser($id: Int!, $userName: String!, $email: String!) {
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
    }).then(res => res.data.updateUser)
}