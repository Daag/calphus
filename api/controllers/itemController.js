'use strict';

module.exports = function (repository) {
  async function getItems (req, res) {
    const result = await repository.getItems();

    res.json(result);
  }

  async function getItem (req, res) {
    const result = await repository.getItem(req.params.itemId);

    res.json(result);
  }

  async function addItem (req, res) {
    res.json({ 'msg': 'Add Item' });
  }

  async function updateItem (req, res) {
    res.json({ 'msg': 'Update Item' + req.params.itemId });
  }

  async function deleteItem (req, res) {
    res.json({ 'msg': 'Delete Item' + req.params.itemId });
  }

  return Object.assign({}, {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
  });
};
