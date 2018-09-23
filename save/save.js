
const savedCatches = {
}


function saveCatches() {
    // save to db
    // save to localstorage
    Object.keys(catches)
        .map(id => parseInt(id))
        .filter(id => id !== -1)
        .forEach(itemId => {
            const item = getItemById(itemId)
            if (savedCatches[itemId]) {
                const diffFromPreviousSave = catches[itemId] - savedCatches[itemId]
                savedCatches[itemId] = catches[itemId]
                console.log(`Saved: ${diffFromPreviousSave} ${item.name}`)
            } else {
                savedCatches[itemId] = catches[itemId]
                console.log(`Saved: ${catches[itemId]} ${item.name}`)
            }
        })
}