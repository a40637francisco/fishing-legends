let canvas = null
let ctx = null

const WIDTH = 250
const HEIGHT = 256

function drawEquipment(equipmentId) {
    if (!canvas) {
        canvas = document.getElementById('equipment__display-canvas')
        canvas.width = WIDTH
        canvas.height = HEIGHT

        ctx = canvas.getContext("2d")
    }
    // drawImage(equipmentId)
    drawText(equipmentId)
}

function drawImage(equipmentId) {
    const itemImg = new Image()
    const spriteInfo = getItemSpriteInfo(equipmentId)
    itemImg.src = spriteInfo.path

    ctx.drawImage(itemImg, 0, 0)
}

function drawText(equipmentId) {
    const item = getItemById(equipmentId)
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.font = "30px Arial"
    ctx.fillText(item.name, 50, 50)
}
