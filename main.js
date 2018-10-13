
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

function restartFishingLoop() {
    stopFishing()
    startfishing()
}

function clearAll() {
    player.fishingXP = 0;
    player.fishingLevel = 1;
    player.fishingXPToNextLevel = 0;
    player.equipment = {
        id: 5,
        sigils: [{ id: 8 }]
    }
    bank = [
        { id: 5, quantity: 1 }
    ]
    saveBank()
    savePlayer()
}

function renderNet() {
    drawEquipment(player.equipment.id)
}