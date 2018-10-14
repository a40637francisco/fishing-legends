function clearAll() {
    player.fishingXP = 0;
    player.fishingLevel = 1;
    player.fishingXPToNextLevel = 0;
    player.equipment = {
        id: 5,
        sigils: [{ id: 8 }]
    }
    bank = [
        { id: 7, quantity: 1 },
        { id: 9, quantity: 1 },
    ]
    saveBank()
    savePlayer()
}

function renderNet() {
    renderEquipment()
}

function showLogs() {
    console.log(player)
    console.log(bank)
}

renderEquipment()
