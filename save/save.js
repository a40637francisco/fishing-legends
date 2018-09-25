const SAVING_INTERVAL = 10000

const savedCatches = {
}

let savingInterval = null

window.onbeforeunload = function () {
    saveAll()
};

function saveLoop() {
    savingInterval = setInterval(() => {
        saveAll()
    }, SAVING_INTERVAL)
}

function stopSaveLoop() {
    clearInterval(savingInterval)
    savingInterval = null
}

function loadAll() {
    loadValues('fishing-legends__bank', (values) => bank = values || [])
    loadValues('fishing-legends__player', (values) => player = values || player)
}

function saveAll() {
    saveBank()
    savePlayer()
}

function saveBank() {
    saveValues('fishing-legends__bank', bank)
}

function savePlayer() {
    saveValues('fishing-legends__player', player)
}

function saveValues(key, values) {
    saveToLocalStorage(key, values)
}

function loadValues(key, cb = () => { }) {
    const values = loadFromLocalStorage(key)
    cb(values)
}

function saveCatches() {
    // save to db
    // save to localstorage
    Object.keys(catches)
        .map(id => parseInt(id))
        .filter(id => id !== -1)
        .forEach(itemId => {
            const item = getItemById(itemId)
            if (savedCatches[itemId]) {
                const diffFromPreviousSave = catches[itemId] - savedCatches[itemId]
                savedCatches[itemId] = catches[itemId]
                console.log(`Saved: ${diffFromPreviousSave} ${item.name}`)
            } else {
                savedCatches[itemId] = catches[itemId]
                console.log(`Saved: ${catches[itemId]} ${item.name}`)
            }
        })
}
