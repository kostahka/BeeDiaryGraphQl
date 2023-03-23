const graphql = require("graphql/index");
const {getApiary, getApiaries} = require("./apiary-queries")
const {getHive} = require("./hive-queries")

const privateQuery = new graphql.GraphQLObjectType({
    name: "Query",
    fields:{
        getApiary,
        getApiaries,
        getHive
    }
})

module.exports = privateQuery