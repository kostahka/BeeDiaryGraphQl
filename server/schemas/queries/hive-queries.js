const graphql = require("graphql/index");
const {apiaryType} = require("../types/apiary-types");
const apiaryService = require("../../service/apiary-service")
const hiveService = require("../../service/hive-service")
const {hiveType} = require("../types/hive-types");

const getHive = {
    type: hiveType,
    args:{
        id : {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
    },
    resolve: async (_, {id}) => {
        const hive = await hiveService.get(id)
        return hive
    }
}

module.exports = {getHive}