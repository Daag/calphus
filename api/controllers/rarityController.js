'use strict';

module.exports = function (repository) {
  async function getRarities (req, res) {
    const result = await repository.getRarities();

    res.json(result);
  }

  return Object.assign({}, {
    getRarities
  });
};
