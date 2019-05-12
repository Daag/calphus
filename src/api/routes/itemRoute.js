'use strict';

const categoryController = require('../controllers/categoryController')();
const itemController = require('../controllers/itemController')();
const rarityController = require('../controllers/rarityController')();

module.exports = function(app) {
  app.route('/api/categories')
    .get(categoryController.get_categories);

  app.route('/api/items')
    .get(itemController.get_items)
    .post(itemController.add_item);

  app.route('/api/items/:itemId')
    .get(itemController.get_item)
    .put(itemController.update_item)
    .delete(itemController.delete_item);
      
  app.route('/api/rarities')
    .get(rarityController.get_rarities);
};
