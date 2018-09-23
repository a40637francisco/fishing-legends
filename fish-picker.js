
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

const XP = 0

let catchSpeed = 1000

const fishes = [
    { id: 1, name: 'Tuna', chance: 2 },
    { id: 2, name: 'Salmon', chance: 3 },
    { id: 3, name: 'Lobster', chance: 2 },
];

var catches = {}

const missFish = { id: -1, name: 'Didn`t catch', chance: 1 }
fishes.push(missFish)

const chest = { id: 99, name: 'Chest', chance: .03 }
fishes.push(chest)

setInterval(() => {
    if (Object.keys(blockFishing).length === 0) {
        const fish = getfish(fishes);
        // console.log(fish);
        catches[fish.id] = catches[fish.id] ? catches[fish.id] + 1 : 1;
        document.getElementById(fish.name).innerHTML = catches[fish.id];
    }
}, catchSpeed)