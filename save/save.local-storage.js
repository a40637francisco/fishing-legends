

function saveToLocalStorage(values) {
    localStorage.setItem('fishing-legends__values', JSON.stringify(values));
}

function loadFromLocalStorage() {
    let values = localStorage.getItem('fishing-legends__values');
    console.log('values: ', JSON.parse(values));
}