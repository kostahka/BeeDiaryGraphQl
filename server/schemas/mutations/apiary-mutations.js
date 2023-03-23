const graphql = require("graphql");
const apiaryService = require("../../service/apiary-service");
const {apiaryType} = require("../types/apiary-types");
const {apiaryInputType} = require("../inputs/apiary-inputs");

const setApiary = {
    type: apiaryType,
    args:{
        apiaryInput: {type: new graphql.GraphQLNonNull(apiaryInputType)}
    },
    resolve: async (_, {apiaryInput}) => {
        const apiary = await apiaryService.set(apiaryInput)
        return apiary
    }
}

const addApiary = {
    type: apiaryType,
    args:{
        nickname: {type: graphql.GraphQLString},
        name: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: async (_, {nickname, name}) => {
        const apiary = await apiaryService.add(nickname, name)
        return apiary
    }
}

const deleteApiary = {
    type: apiaryType,
    args:{
        id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: async (_, {id}) => {
        const apiary = await apiaryService.delete(id)
        return apiary
    }
}

module.exports = {setApiary, addApiary, deleteApiary}