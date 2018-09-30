
let player = {
    fishingXP: 0,
    fishingLevel: 1,
    fishingXPToNextLevel: 0,
    equipment: {
        id: 5,
        sigils: [
            {
                id: 8
            }
        ]
    },
}

function playerCanCatchFish(fishCatchType) {
  const item = getItemById(player.equipment.id)
  return item.fishType.includes(fishCatchType)
}

function playerCalcCatchSpeedMultiplier() {
    let multiplier = 1

    // FROM EQUIPMENT
    const item = getItemById(player.equipment.id)
    multiplier += item.attributes ? item.attributes.catchSpeed || 0 : 0

    // FROM SIGILS
    multiplier += calcCatchSpeedMultiplerFromSigils(player.equipment.sigils || [])
    return multiplier
}

function calcCatchSpeedMultiplerFromSigils(sigils) {
    return sigils
        .map(s => getItemById(s.id))
        .filter(s => s.attributes.catchSpeed)
        .map(s => s.attributes.catchSpeed)
        .reduce((s1, s2) => s1 + s2)
}


// REMOVE FROM HERE!!!
function renderFishingXP() {
    document.getElementById('fishing-level__current').innerHTML = player.fishingLevel
}

function addXpToPlayer(xp) {
    player.fishingXP += xp
    if (player.fishingXP >= player.fishingXPToNextLevel) {
        player.fishingLevel += 1
        setfishingLevel()
        savePlayer()
        renderFishingXP()
    }
}

function inititalPlayerConfig() {
    setfishingLevel()
    renderFishingXP()
    // outras coisas
}

function setfishingLevel() {
    const points = Math.floor(player.fishingLevel + 300 * Math.pow(2, player.fishingLevel / 7.));
    const output = Math.floor(points / 4);
    player.fishingXPToNextLevel += output
}