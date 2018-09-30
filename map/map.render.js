function openMap() {
    blockFishing.map = true
    renderMap()
}

function closeMap() {
    delete blockFishing.map

    const mapElem = document.getElementsByClassName('map')[0]
    mapElem.classList.remove('map--open')
}
