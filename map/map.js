const map = {}

function buildWorldMap() {
    addTutorialRegion(map)
}
    
let mapOpenLevels = ['region_1']

function pushToMapTree(value) {
    mapOpenLevels.push(value)
}

function popFromMapTree() {
    mapOpenLevels.pop()
}

function clearMapTree() {
    mapOpenLevels = []
}

