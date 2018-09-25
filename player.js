let player = {
    fishingXP: 0,
    fishingLevel: 1,
    fishingXPToNextLevel: 0,
    equipment: {
        id: 4,
        sigils: [
            {
                id: 6
            }
        ]
    }
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