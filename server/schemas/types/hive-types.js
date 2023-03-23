const graphql = require('graphql')

const hiveType = new graphql.GraphQLObjectType({
    name: "Hive",
    fields:{
        _id: {type: graphql.GraphQLString},
        number: {type: graphql.GraphQLInt},
        type: {type: graphql.GraphQLString},
        queen: {type: graphql.GraphQLString},
        performance: {type: graphql.GraphQLInt},
    }
})

module.exports = {hiveType}