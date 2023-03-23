const graphql = require('graphql')
const userMutation = require('./mutations/user-mutation')
const userQuery = require('./queries/user-query')
const privateMutation = require('./mutations/private-mutation')
const privateQuery = require('./queries/private-query')

const userSchema = new graphql.GraphQLSchema({mutation: userMutation, query:userQuery})
const privateSchema = new graphql.GraphQLSchema({mutation: privateMutation, query: privateQuery})

module.exports = {userSchema, privateSchema}