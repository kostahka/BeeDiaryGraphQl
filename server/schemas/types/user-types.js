const graphql = require('graphql')

const userType = new graphql.GraphQLObjectType({
    name: "User",
    fields:{
        _id: {type: graphql.GraphQLString},
        nickname: {type: graphql.GraphQLString},
        isAdmin: {type: graphql.GraphQLBoolean}
    }
})

const userDataType = new graphql.GraphQLObjectType({
    name: "UserData",
    fields: {
        user: {type: userType},
        refreshToken: {type: graphql.GraphQLString},
        accessToken: {type: graphql.GraphQLString}
    }
})

module.exports = {userType, userDataType}