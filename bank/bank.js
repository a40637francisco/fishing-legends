const bank = [
    { id: 1, quantity: 200 },
    { id: 2, quantity: 100 },
    { id: 3, quantity: 40 },
]


function addMultipleItemsToBank(items) {
    items.forEach((item) => {
        addToBank(item)
    })
    return true
}

/* 
 *   item extends Item: {
 *       id: number,;
 *       quantity: number;
 *   }
 */
function addToBank(item) {
    const itemTemplate = getItemById(item.id)
    if (itemTemplate.canStack) {
        let itemStacks = bank.filter(b => b.id === item.id)
        if (!itemStacks.length) {
            addToStack(itemStacks, item, itemTemplate)
            return;
        }
    }
    bank.push(item)
    return true
}

function addToStack(itemStacks, item, itemTemplate) {
    for (let i = 0; i < itemStacks.length; i++) {
        const currentQuantity = itemStacks[i].quantity
        if (currentQuantity === itemTemplate.maxStack) { continue; }
        itemStacks[i].quantity = currentQuantity + item.quantity;
        return true;
    }
    return false
}