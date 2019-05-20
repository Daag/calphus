'use strict';

const appName = 'calphus';
const config = require('./config')(appName);
const getDal = require('./helpers/getDal');
const dal = getDal(config);

const app = require('./server')(dal);

app.listen(config.app.port);

console.log('calphus API server started on: ' + config.app.port);
