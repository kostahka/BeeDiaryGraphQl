const graphql = require("graphql");
const {setApiary, deleteApiary, addApiary} = require("./apiary-mutations")
const {setHive, deleteHive, addHives} = require("./hive-mutations")

const privateMutation = new graphql.GraphQLObjectType({
    name: "Mutation",
    fields:{
        setApiary,
        deleteApiary,
        addApiary,
        setHive,
        deleteHive,
        addHives
    }
})

module.exports = privateMutation