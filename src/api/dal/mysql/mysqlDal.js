'use strict';

const mysql = require('mysql2');
const SP = require('./storedProcedureEnum');

module.exports = function () {
  const pool = mysql.createPool({
    connectionLimit : 100, //important
    host: 'localhost',
    user: 'root',
    password: 'root2018',
    database: 'calphus',
    debug:  false
  });
  
  async function get_items () {
    const result = await call_database(build_sp_call(SP.GET_MAGIC_ITEMS));
    return result;
  }
  
  async function get_item (id) {
    let params = [id];
    console.log('Get_Item_By_Id: ' + params);
    const [result] = await call_database(build_sp_call(SP.GET_MAGIC_ITEM_BY_ID, params), params);
    return result;
  }

  async function add_item () {

  }

  async function update_item () {

  }

  async function delete_item () {

  }

  async function get_categories () {
    const result = await call_database(build_sp_call(SP.GET_CATEGORIES));
    return result;
  }

  async function get_rarities (callback) {
    const result = await call_database(build_sp_call(SP.GET_RARITIES));
    return result;
  }

  function build_sp_call (sp, params = []) {
    let parameters = params.map(x => '?').toString();
        
    console.log('CALL ' + sp + '(' + parameters + ');');

    return 'CALL ' + sp + '(' + parameters + ');';
  }

  async function call_database (sql, params) {
    const promisePool = pool.promise();
    const [rows, fields] = await promisePool.query(sql, params);

    return rows[0];
  }

  return Object.assign( {}, {
    get_items,
    get_item,
    add_item,
    update_item,
    delete_item,
    get_categories,
    get_rarities
  });
}
