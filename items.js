const ITEM_CATEGORY = {
    FISH: 'Fish',
    EQUIPMENT: 'Equipment',
    SIGILS: 'Sigil',
    TREASURE: 'Treasure',
}

/**
 * Item: {
 *  id: number;
 *  canStack: boolean;
 *  name: string;
 *  category: ITEM_CATEGORY: ENUM;
 *  xp: number;
 * 
 *  EQUIPMENT|SIGILS: {
 *      attributes: {
 *          catchSpeed: number; (0.5 = 50% faster),
 *          missChance: number; (0.5 = 50% less),
 *          treasureChance: number; (0.5 = 50% more),
 *      }
 *  }
 * }
 */
const items = [
    // Fish
    { id: 1, name: 'Tuna', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH, xp: 5 },
    { id: 2, name: 'Salmon', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH, xp: 10 },
    { id: 3, name: 'Crab', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH, xp: 15 },
    { id: 4, name: 'Lobster', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH, xp: 25 },

    //Equipment
    { id: 5, name: 'Net', canStack: false, maxStack: 1, category: ITEM_CATEGORY.EQUIPMENT, },
    { id: 6, name: 'Wood fishing pole', canStack: false, maxStack: 1, category: ITEM_CATEGORY.EQUIPMENT },
    { id: 7, name: 'Super net', canStack: false, maxStack: 1, category: ITEM_CATEGORY.EQUIPMENT, attributes: { catchSpeed: .5 } },

    //Sigils
    { id: 8, name: 'Bolt', canStack: false, maxStack: 1, category: ITEM_CATEGORY.SIGILS, attributes: { catchSpeed: 1 } },

    { id: 99, name: 'Chest', canStack: false, maxStack: 1, category: ITEM_CATEGORY.TREASURE },
]

function getItemById(id) {
    const hits = items.filter(item => item.id === id)
    return hits.length > 0 ? hits[0] : null
}