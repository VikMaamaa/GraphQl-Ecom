const { ApolloServer } = require("apollo-server")
// const { categories, products } = require("./db")
const {typeDefs} = require('./schema')
const {Query} = require("./resolvers/Query")
const {Category} = require("./resolvers/Category")
const {Product} = require("./resolvers/Product")
// String, Int, Float, Boolean, ID






const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Category,
        Product
    }
})

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url)
})