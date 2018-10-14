const MAX_SIGILS = 4

function equipEquipment(item) {
    if(player.equipment) {
        addToBank(player.equipment)
    }
    player.equipment = item
}

function addSigil(item) {
    const currentSigils = player.equipment.sigils || []
    const equipmentItem = getItemById(player.equipment.id)
    if(equipmentItem.maxSigils > currentSigils.length) {
        currentSigils.push({id: item.id})
    }
    player.equipment.sigils = currentSigils
}

function removeSigil(index) {
    const sigil = player.equipment.sigils[index]
    player.equipment.sigils = player.equipment.sigils.filter((s, i) => i !== index)
    addToBank(sigil)
    saveAll()
    renderBank()
    renderEquipment()
}