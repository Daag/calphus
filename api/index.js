'use strict';

const appName = 'calphus';
const config = require('./config')(appName);
const getRepository = require('./helpers/getRepository');
const repository = getRepository(config);

const app = require('./server')(repository);

app.listen(config.app.port);

console.log('calphus API server started on: ' + config.app.port);
