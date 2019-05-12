'use strict';

let dal = require('../dal/mysql/mysqlDal')();

module.exports = function () {
  async function get_rarities (req, res) {
    const result = await dal.get_rarities();

    res.json(result);
  }

  return Object.assign({}, {
    get_rarities
  });
}
