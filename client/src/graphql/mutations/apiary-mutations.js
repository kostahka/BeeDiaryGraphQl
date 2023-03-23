import {gql} from "@apollo/client";

export const ADD_APIARY = gql`
    mutation addApiary($nickname: String, $name: String!){
        addApiary(nickname: $nickname, name: $name){
            _id
        }
    }
`

export const SET_APIARY = gql`
    mutation setApiary($input: ApiaryInput!){
        setApiary(apiaryInput: $input){
            _id
        }
    }
`

export const DELETE_APIARY = gql`
    mutation deleteApiary($id: String!){
        deleteApiary(id: $id){
            _id
        }
    }
`