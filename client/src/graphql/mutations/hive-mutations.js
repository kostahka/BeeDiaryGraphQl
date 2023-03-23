import {gql} from "@apollo/client";

export const ADD_HIVES = gql`
    mutation addHives($id: String!, $count: Int!){
        addHives(id: $id, count: $count){
            _id
        }
    }
`

export const SET_HIVE = gql`
    mutation setHive($input: HiveInput!){
        setHive(hiveInput: $input){
            _id
        }
    }
`

export const DELETE_HIVE = gql`
    mutation deleteHive($id: String!){
        deleteHive(id: $id){
            _id
        }
    }
`