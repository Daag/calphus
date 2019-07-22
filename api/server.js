'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/itemRoute');
const graphqlHTTP = require('express-graphql');
const initGraphql = require('./dal/graphql/graphqlDal');

module.exports = function (dal) {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
  });

  routes(app, dal);

  const graphql = initGraphql(dal);

  app.use('/graphql', graphqlHTTP({
    schema: graphql.schema,
    rootValue: graphql.root,
    graphiql: true
  }));

  return app;
};
