const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./schema/schema");

// Creates an Express application.
// The express() function is a top-level function exported by the express module.
const app = express();

// Middleware to handle graphQL request.
// Remember, we only have one supercharged endpoint in graphQL.

// The middleware expects a 'schema' in order to work. This schema tells express-graphql
// about the data and how our graph looks like, so that the middleware knows how to deal
// with the data and queries

// What's happening here is, graphqlHTTP() will fire whenever a request to '/graphql' is made
// and will handle that request.
app.use(
  "/graphql",
  graphqlHTTP({
    schema: Schema,
  })
);

// Listen for connections on port 4000.
app.listen(4000, () => {
  console.log("Now listening requests on port 4000");
});
