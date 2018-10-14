const MAX_SIGILS = 4

function equipEquipment(item) {
    debugger
    if(player.equipment) {
        addToBank(player.equipment)
    }
    player.equipment = item
}

function addSigil(item) {
    const currentSigils = player.equipment.sigils || []
    const equipmentItem = getItemById(player.equipment.id)
    if(equipmentItem.maxSigils > currentSigils.length) {
        player.equipment.sigils.push({id: item.id})
    }
}

function removeSigil(item) {
    player.equipment.sigils = player.equipment.sigils.filter(s => s.id !== item.id)
}