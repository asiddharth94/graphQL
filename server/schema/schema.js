// The schema describes the data on the graph, the object types, the relationships
// between these and how we can reach into the graph to interact with the data,
// whether for querying or mutating.

const graphql = require("graphql");

const { buildSchema } = graphql;

// Author ---> Book is a one-to-many relationship
const Schema = buildSchema(
  `
    type Book {
        id: String!
        name: String!
        genre: String!
        author: Author!
    }

    type Author {
        id: String!
        name: String!
        books: [Book!]!
    }
    `
);

module.exports = Schema;
