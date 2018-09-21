function randomId() {
    return '_' + Math.random().toString(36).substr(2, 9)
}

function clearChilds(node) {
    while (node.firstChild) {
        node.firstChild.remove();
    }
}