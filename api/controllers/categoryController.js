'use strict';

module.exports = function (dal) {
  async function getCategories (req, res) {
    const result = await dal.getCategories();

    res.json(result);
  }

  return Object.assign({}, {
    getCategories
  });
};
