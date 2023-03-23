const graphql = require('graphql')

const apiaryInputType = new graphql.GraphQLInputObjectType({
    name: "ApiaryInput",
    fields:{
        _id: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        name: {type: graphql.GraphQLString},
    }
})

module.exports = {apiaryInputType}