'use strict';

let dal = require('../dal/mysql/mysqlDal')();

module.exports = function () {
  async function getRarities (req, res) {
    const result = await dal.getRarities();

    res.json(result);
  }

  return Object.assign({}, {
    getRarities
  });
};
