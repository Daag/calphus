'use strict';

const mysql = require('mysql2');
const SP = require('./storedProcedureEnum');
const itemModel = require('../../models/itemModel')();

module.exports = function () {
  const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'root2018',
    database: 'calphus',
    debug: false
  });

  async function getItems () {
    const result = await callDatabase(buildSpCall(SP.GET_MAGIC_ITEMS));
    return itemModel.getList(result);
  }

  async function getItem (id) {
    const params = [id];
    console.log('Get_Item_By_Id: ' + params);
    const [result] = await callDatabase(buildSpCall(SP.GET_MAGIC_ITEM_BY_ID, params), params);
    return itemModel.get(result);
  }

  async function addItem () {

  }

  async function updateItem () {

  }

  async function deleteItem () {

  }

  async function getCategories () {
    const result = await callDatabase(buildSpCall(SP.GET_CATEGORIES));
    return result;
  }

  async function getRarities (callback) {
    const result = await callDatabase(buildSpCall(SP.GET_RARITIES));
    return result;
  }

  function buildSpCall (sp, params = []) {
    let parameters = params.map(x => '?').toString();

    console.log('CALL ' + sp + '(' + parameters + ');');

    return 'CALL ' + sp + '(' + parameters + ');';
  }

  async function callDatabase (sql, params) {
    const promisePool = pool.promise();
    const [rows] = await promisePool.query(sql, params);

    return rows[0];
  }

  return Object.assign({}, {
    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem,
    getCategories,
    getRarities
  });
};
