const graphql = require("graphql/index");
const {apiaryType} = require("../types/apiary-types");
const apiaryService = require("../../service/apiary-service")

const getApiaries = {
    type: new graphql.GraphQLList(apiaryType),
        args:{
            nickname: {type: graphql.GraphQLString}
    },
    resolve: async (_, {nickname}) => {
        const apiaries = await apiaryService.getAll(nickname)
        return apiaries
    }
}

const getApiary = {
    type: apiaryType,
    args:{
        id : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: async (_, {id}) => {
        const apiary = await apiaryService.get(id)
        return apiary
    }
}

module.exports = {getApiary, getApiaries}