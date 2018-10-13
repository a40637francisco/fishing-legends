const ITEMS_SPRITES = [
    { id: 7, path: './items/net.png', width: 250, height: 275 }
]

function getItemSpriteInfo(id) {
    const sprite = ITEMS_SPRITES.filter(i => i.id === id)
    return sprite.length === 1 ? sprite[0] : { path: '', width: 250, height: 250 }
}
