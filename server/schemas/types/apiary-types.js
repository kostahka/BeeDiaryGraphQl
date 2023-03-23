const graphql = require('graphql')
const {hiveType} = require("./hive-types");

const apiaryType = new graphql.GraphQLObjectType({
    name: "Apiary",
    fields:{
        _id: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        hives: {type: new graphql.GraphQLList(hiveType)}
    }
})

module.exports = {apiaryType}