'use strict';

let dal = require('../dal/mysql/mysqlDal')();

module.exports = function () {
  async function get_categories (req, res) {
    const result = await dal.get_categories();

    res.json(result);
  }

  return Object.assign({}, {
    get_categories
  });
}
