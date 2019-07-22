'use strict';

const { buildSchema } = require('graphql');

module.exports = function (dal) {
  const schema = buildSchema(`
    type Query {
      magicitems: [MagicItem],
      magicitem(id: Int!): MagicItem,
      categories: [Category]
    }

    type MagicItem {
      id: Int!,
      name: String!,
      category: Category,
      sub_category: String,
      rarity: Rarity,
      description: String!
      attunement: Boolean!,
      attunement_requirement: String
    }

    type Category {
      id: Int!,
      name: String!
    }

    type Rarity {
      id: Int!,
      name: String!
    }
  `);

  const root = {
    magicitems: () => dal.getItems(),
    magicitem: (args) => dal.getItem(args.id),
    categories: () => dal.getCategories()
  };

  return {
    schema: schema,
    root: root
  };
};
