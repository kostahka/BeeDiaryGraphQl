import {gql} from "@apollo/client";

export const GET_APIARIES = gql`
    query getApiaries($nickname: String){
        getApiaries(nickname: $nickname){
            _id, name
        }
    }
`

export const GET_APIARY = gql`
    query getApiary($id: String!){
        getApiary(id: $id){
            _id, name, hives {
                _id, number, type, queen, performance
            }
        }
    }   
`