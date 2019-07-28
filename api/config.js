'use strict';

const rc = require('rc');

module.exports = function (appName) {
  return rc(appName, {
    app: {
      port: 3000
    },
    repository: {
      current: 'mariadb',
      mariadb: {
        connectionLimit: 100,
        database: 'calphus',
        debug: false,
        host: 'localhost',
        password: 'root2018',
        user: 'root'
      }
    }
  });
};
