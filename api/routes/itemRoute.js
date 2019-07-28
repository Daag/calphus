'use strict';

module.exports = function (app, repository) {
  const categoryController = require('../controllers/categoryController')(repository);
  const itemController = require('../controllers/itemController')(repository);
  const rarityController = require('../controllers/rarityController')(repository);

  app.route('/api/categories')
    .get(categoryController.getCategories);

  app.route('/api/items')
    .get(itemController.getItems)
    .post(itemController.addItem);

  app.route('/api/items/:itemId')
    .get(itemController.getItem)
    .put(itemController.updateItem)
    .delete(itemController.deleteItem);

  app.route('/api/rarities')
    .get(rarityController.getRarities);
};
