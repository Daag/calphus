'use strict';
let mysql = require('mysql');

const GET_CATEGORIES = 'get_categories';
const GET_RARITIES = 'get_rarities';
const GET_MAGIC_ITEMS = 'get_magic_items';
const GET_MAGIC_ITEM_BY_ID = 'get_magic_item_by_id';

let pool = mysql.createPool({
    connectionLimit : 100, //important
    host: 'localhost',
    user: 'root',
    password: 'root2018',
    database: 'calphus',
    debug:  false
});

exports.get_items = function(callback) {
    call_database(callback, build_sp_call(GET_MAGIC_ITEMS));
};

exports.add_item = function() {
    
};

exports.get_item = function(id, callback) {
    let params = [id];
    console.log('Get_Item_By_Id: ' + params);
    call_database(callback, build_sp_call(GET_MAGIC_ITEM_BY_ID, params.length), params)
};

exports.update_item = function() {
    
};

exports.delete_item = function() {
    
};

exports.get_categories = function(callback) {
    call_database(callback, build_sp_call(GET_CATEGORIES));
};

exports.get_rarities = function(callback) {
    call_database(callback, build_sp_call(GET_RARITIES));
};

let build_sp_call = function (sp, num_param = 0) {
    let parameters = '';
    for (var i = 0; i < num_param; i++) {
        parameters += '?,';
    }
    if (parameters.endsWith(','))
        parameters = parameters.substr(0, parameters.length - 1);

    console.log('CALL ' + sp + '(' + parameters + ');');

    return 'CALL ' + sp + '(' + parameters + ');';
}

let call_database = function (callback, sql, params = null) {
    pool.getConnection(function(err, connection) {
        let result = {};

        if (err) 
            callback({ "code": 100, "status": "Error connecting to database: " });
        
        console.log('connected as id ' + connection.threadId);

        connection.query(sql, params, (err, rows) => {
            connection.release();
            if (!err)
                callback(rows[0]);
        });

        connection.on('error', function(err) {
            callback({ "code": 100, "status": "Error connecting to database: " });
        })
    });
}