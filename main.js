
loadAll()

saveLoop()

function startfishing() {
    const zone = zones[currentZone]
    startFishingLoop(zone, (fishItemCaught) => {
        addXpToPlayer(fishItemCaught.xp || 0)
        addToBank({ quantity: 1, id: fishItemCaught.id })
    })
}

function stopFishing() {
    stopFishingLoop()
}

function test() {
    console.log(bank)
}
