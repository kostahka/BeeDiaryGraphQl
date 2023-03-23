const graphql = require('graphql')

const hiveInputType = new graphql.GraphQLInputObjectType({
    name: "HiveInput",
    fields:{
        _id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        type: {type: graphql.GraphQLString},
        queen: {type: graphql.GraphQLString},
        performance: {type: graphql.GraphQLInt},
    }
})

module.exports = {hiveInputType}