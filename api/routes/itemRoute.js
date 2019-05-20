'use strict';

module.exports = function (app, dal) {
  const categoryController = require('../controllers/categoryController')(dal);
  const itemController = require('../controllers/itemController')(dal);
  const rarityController = require('../controllers/rarityController')(dal);

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
