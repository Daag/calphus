'use strict';

const categoryController = require('../controllers/categoryController')();
const itemController = require('../controllers/itemController')();
const rarityController = require('../controllers/rarityController')();

module.exports = function (app) {
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
