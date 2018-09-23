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
 *  category: ITEM_CATEGORY: ENUM
 * }
 */
const items = [
    { id: 1, name: 'Tuna', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH },
    { id: 2, name: 'Salmon', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH },
    { id: 3, name: 'Lobster', canStack: true, maxStack: 999, category: ITEM_CATEGORY.FISH },
    { id: 99, name: 'Chest', canStack: false, maxStack: 1, category: ITEM_CATEGORY.TREASURE },
]

function getItemById(id) {
    const hits = items.filter(item => item.id === id)
    return hits.length > 0 ? hits[0] : null
}