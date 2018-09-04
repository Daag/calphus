'use strict';
module.exports = function(app) {
  let controller = require('../controllers/itemController');

  app.route('/api/items/categories')
    .get(controller.get_categories);
  
  app.route('/api/items/rarities')
    .get(controller.get_rarities);

  app.route('/api/items')
    .get(controller.get_items)
    .post(controller.add_item);

  app.route('/api/items/:itemId')
    .get(controller.get_item)
    .put(controller.update_item)
    .delete(controller.delete_item);
};
