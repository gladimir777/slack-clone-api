import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

import models from "./models";

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

models.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

models.sequelize.sync().then(function () {
  // Start the server
  app.listen(3000, () => {
    console.log("http://localhost:3000");
  });
});
