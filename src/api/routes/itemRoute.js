'use strict';
module.exports = function(app) {
  var itemList = require('../controllers/itemController');

  // todoList Routes
  app.route('/api/items')
    .get(itemList.get_items)
    .post(itemList.add_item);


  app.route('/api/item/:itemId')
    .get(itemList.get_item)
    .put(itemList.update_item)
    .delete(itemList.delete_item);
};
