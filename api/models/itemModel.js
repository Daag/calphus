'use strict';

module.exports = function () {
  function get (flatItem) {
    return {
      id: flatItem.id,
      name: flatItem.name,
      category: {
        id: flatItem.category_id,
        name: flatItem.category_name
      },
      sub_category: flatItem.sub_category,
      rarity: {
        id: flatItem.rarity_id,
        name: flatItem.rarity_name
      },
      description: flatItem.description,
      attunement: flatItem.attunement ? 1 : 0,
      attunement_requirement: flatItem.attunement_requirement
    };
  }

  function getList (flatItemArray) {
    return flatItemArray.map(get);
  }

  return Object.assign({}, {
    get,
    getList
  });
};
