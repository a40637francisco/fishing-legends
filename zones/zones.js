

const zones = {
    1: {
        name: 'Trainning island',
        level: 1,
        catchSpeed: 2000,
        missChance: 1, // can be set or it will default to 1
        fishes: [
            {
                id: 1,
                chance: 2
            },
            {
                id: 2,
                chance: 3
            },
        ],
        treasures: [
            {
                id: 99,
                chance: 0.03
            }
        ]
    },
    2: {
        name: 'Crab paradise',
        level: 10,
        missChance: 1,
        fishes: [
            {
                id: 3,
                chance: 4
            }
        ]
    },
}