

let fishingInterval = null

var catches = {}

function startFishingLoop(zone, cb = () => { }) {

    const catchSpeed = zone.catchSpeed; // calcular
    let possibleCatches = zone.fishes;

    // SET MISS CHANCE
    const missChance = zone.missChance || 1 // also get multipliers from player equipment
    possibleCatches.push({ id: -1, name: 'Didn`t catch', chance: missChance })

    // SET TREASURE CHANCE
    possibleCatches = possibleCatches.concat(zone.treasures)

    fishingInterval = setInterval(() => {
        if (Object.keys(blockFishing).length === 0) {
            const fish = getfish(possibleCatches)
            const fishItem = getItemById(fish.id)

            if (!fishItem) {
                catches[fish.id] = catches[fish.id] ? catches[fish.id] + 1 : 1
                document.getElementById('Didn`t catch').innerHTML = catches[fish.id]
            } else {
                catches[fish.id] = catches[fish.id] ? catches[fish.id] + 1 : 1
                cb(fishItem)
                document.getElementById(fishItem.name).innerHTML = catches[fish.id]
            }
        }
    }, catchSpeed)
}

function stopFishingLoop() {
    clearInterval(fishingInterval)
    fishingInterval = null
}

function getfish(fishes) {
    let total = 0;
    for (let i = 0; i < fishes.length; ++i) {
        total += fishes[i].chance;
    }
    let rand = Math.random() * total;
    for (let i = 0; i < fishes.length; i++) {
        let fish = fishes[i];
        if (rand < fish.chance) {
            return fish;
        }
        rand -= fish.chance;
    }
}
