

function saveToLocalStorage(key, values) {
    localStorage.setItem(key, JSON.stringify(values))
}

function loadFromLocalStorage(key) {
    let values = localStorage.getItem(key)
    return JSON.parse(values)
}