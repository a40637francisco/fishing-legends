
loadAll(() => {
    inititalPlayerConfig()
    isLoading = false
})

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

function clearAll() {
    player.fishingXP = 0;
    player.fishingLevel = 1;
    player.fishingXPToNextLevel = 0;
    bank = []
    saveBank()
    savePlayer()
}
