'use strict';

let dal = require('../dal/mysql/mysqlDal')();

module.exports = function () {
  async function getCategories (req, res) {
    const result = await dal.getCategories();

    res.json(result);
  }

  return Object.assign({}, {
    getCategories
  });
};
