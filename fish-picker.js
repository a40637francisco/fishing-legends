

let fishingInterval = null

var catches = {}


function startFishingLoop(zone, cb = () => { }) {

  // CATCH SPEED
  let catchSpeed = zone.catchSpeed
  catchSpeed /= playerCalcCatchSpeedMultiplier()

  let possibleCatches = zone.fishes

  // MAP TO FISH ITEMS
  possibleCatches = possibleCatches.map(f => {
    let i = getItemById(f.id)
    return { ...f, ...i }
  })

  // FILTER BY EQUIPMENT CATCH_TYPE
  possibleCatches = possibleCatches.filter(_catch => playerCanCatchFish(_catch.fishType))
  if(possibleCatches.length === 0 ) {
    return alert('Equipment and zone catchTypes do not match')
  }

  // SET MISS CHANCE
  const missChance = zone.missChance || 1 // also get multipliers from player equipment
  const MISS_CATCH = { id: -1, name: 'Didn`t catch', chance: missChance }
  possibleCatches.push(MISS_CATCH)

  // SET TREASURE CHANCE
  possibleCatches = possibleCatches.concat(zone.treasures.map(t => {
    const i = getItemById(t.id)
    return { ...t, ...i }
  })) // also get multipliers from player equipment

  fishingInterval = setInterval(() => {
    if (Object.keys(blockFishing).length === 0) {
      const fishItem = getfish(possibleCatches)
      if (!fishItem || fishItem.id === -1) {
        catches[-1] = catches[-1] ? catches[-1] + 1 : 1
        document.getElementById('Didn`t catch').innerHTML = catches[-1]
      } else {
        catches[fishItem.id] = catches[fishItem.id] ? catches[fishItem.id] + 1 : 1
        cb(fishItem)
        document.getElementById(fishItem.name).innerHTML = catches[fishItem.id]
      }
    }
  }, catchSpeed)
}

function stopFishingLoop() {
  clearInterval(fishingInterval)
  fishingInterval = null
}

function getfish(fishes) {
  let total = 0
  for (let i = 0; i < fishes.length; ++i) {
    total += fishes[i].chance
  }
  let rand = Math.random() * total
  for (let i = 0; i < fishes.length; i++) {
    let fish = fishes[i]
    if (rand < fish.chance) {
      return fish
    }
    rand -= fish.chance
  }
}
