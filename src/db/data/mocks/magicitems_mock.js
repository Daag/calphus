'use strict';

module.exports = function() {
    let magicitems = [
        { id: 1, name: 'Flint Sword of the Rift', category: { id: 1, name: 'Weapon' } },
        { id: 2, name: 'Talisman of the Phoenix', category: { id: 2, name: 'Wondrous Item' }  },
        { id: 3, name: 'Talisman of the Gargoyle', category: { id: 2, name: 'Wondrous Item' }  }
    ];

    let categories = [
        { id: 1, name: 'Weapon' },
        { id: 2, name: 'Wondrous Item' },
        { id: 3, name: 'Armor' },
        { id: 4, name: 'Potion' },
        { id: 5, name: 'Scroll' },
        { id: 6, name: 'Staff' },
        { id: 7, name: 'Ring' },
        { id: 8, name: 'Rod' },
        { id: 9, name: 'Wand' },
    ]

    return {
        magicitems: magicitems,
        categories: categories
    }
}