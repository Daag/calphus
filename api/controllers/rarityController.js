'use strict';

module.exports = function (dal) {
  async function getRarities (req, res) {
    const result = await dal.getRarities();

    res.json(result);
  }

  return Object.assign({}, {
    getRarities
  });
};
