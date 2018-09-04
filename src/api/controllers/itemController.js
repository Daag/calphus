'use strict';

let dal = require('../dal/mysqlDal');

exports.get_items = function(req, res) {
    res.json({ 'msg': 'Get Items' });
};

exports.add_item = function(req, res) {
    res.json({ 'msg': 'Add Item' });
};

exports.get_item = function(req, res) {
    res.json({ 'msg': 'Get Item ' + req.params.itemId });
};

exports.update_item = function(req, res) {
    res.json({ 'msg': 'Update Item' + req.params.itemId });
};

exports.delete_item = function(req, res) {
    res.json({ 'msg': 'Delete Item' + req.params.itemId });
};

exports.get_categories = function(req, res) {
    dal.get_categories(result => {
        res.json(result);
    });
};

exports.get_rarities = function(req, res) {
    dal.get_rarities(result => {
        res.json(result);
    });
};