const graphql = require("graphql");
const {userDataType, userType} = require("../types/user-types");
const {authInputType} = require("../inputs/user-inputs");
const userService = require("../../service/user-service")

const userQuery = new graphql.GraphQLObjectType({
    name: "Query",
    fields:{
        getUser: {
            type: userType,
            args:{
                id: {type: graphql.GraphQLString}
            },
            resolve: async (_, {id}) => {
                const user = await userService.getUser(id)
                return user
            }
        }
    }
})

module.exports = userQuery