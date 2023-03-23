import {gql} from "@apollo/client";

export const GET_HIVE = gql`
    query getHive($id: String!){
        getHive(id: $id){
            _id, number, type, queen, performance
        }
    }
`