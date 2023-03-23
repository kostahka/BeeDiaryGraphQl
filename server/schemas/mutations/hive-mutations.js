const graphql = require("graphql");
const hiveService = require("../../service/hive-service");
const {hiveType} = require("../types/hive-types");
const {hiveInputType} = require("../inputs/hive-inputs");

const setHive = {
    type: hiveType,
    args:{
        hiveInput: {type: new graphql.GraphQLNonNull(hiveInputType)}
    },
    resolve: async (_, {hiveInput}) => {
        const hive = await hiveService.set(hiveInput)
        return hive
    }
}

const addHives = {
    type: new graphql.GraphQLList(hiveType),
    args:{
        id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        count: {type: new graphql.GraphQLNonNull(graphql.GraphQLInt)}
    },
    resolve: async (_, {id, count}) => {
        const hives = await hiveService.add(id, count)
        return hives
    }
}

const deleteHive = {
    type: hiveType,
    args:{
        id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
    },
    resolve: async (_, {id}) => {
        const hive = await hiveService.delete(id)
        return hive
    }
}

module.exports = {setHive, addHives, deleteHive}