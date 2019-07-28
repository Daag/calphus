'use strict';

module.exports = function (repository) {
  async function getCategories (req, res) {
    const result = await repository.getCategories();

    res.json(result);
  }

  return Object.assign({}, {
    getCategories
  });
};
