const graphql = require('graphql')

const authInputType = new graphql.GraphQLInputObjectType({
    name: "AuthInput",
    fields:{
        nickname: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        password: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
        isAdmin: {type: graphql.GraphQLBoolean}
    }
})

module.exports = {authInputType}