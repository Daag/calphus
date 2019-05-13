'use strict';

let { buildSchema } = require('graphql');
let data = require('../../../db/data/mocks/magicitems_mock')();

module.exports = function () {
  let schema = buildSchema(`
    type Query {
      hello: String,
      magicitems: [MagicItem],
      categories: [Category]
    }

    type MagicItem {
      id: Int!,
      name: String!,
      category: Category
    }

    type Category {
      id: Int!,
      name: String!
    }
  `);

  let root = {
    hello: () => 'Hello World!',
    magicitems: () => data.magicitems,
    categories: () => data.categories
  };

  return {
    schema: schema,
    root: root
  };
};
