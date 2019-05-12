'use strict';

let dal = require('../dal/mysql/mysqlDal')();

module.exports = function () {
  async function get_items (req, res) {
    const result = await dal.get_items();

    res.json(result);
  }

  async function get_item (req, res) {
    const result = await dal.get_item(req.params.itemId);

    res.json(result);
  }

  async function add_item (req, res) {
    res.json({ 'msg': 'Add Item' });
  }

  async function update_item (req, res) {
    res.json({ 'msg': 'Update Item' + req.params.itemId });
  }

  async function delete_item (req, res) {
    res.json({ 'msg': 'Delete Item' + req.params.itemId });    
  }

  return Object.assign({}, {
    get_items,
    get_item,
    add_item,
    update_item,
    delete_item
  })
}
