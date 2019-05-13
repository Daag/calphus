let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let bodyParser = require('body-parser');

let graphqlHTTP = require('express-graphql');

let dal = require('./api/dal/graphql/graphqlDal')();

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

let routes = require('./api/routes/itemRoute');
routes(app);

app.use('/graphql', graphqlHTTP({
  schema: dal.schema,
  rootValue: dal.root,
  graphiql: true
}));

app.listen(port);

console.log('calphus API server started on: ' + port);
