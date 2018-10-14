
const EQUIPMENT_WIDTH = 250
const EQUIPMENT_HEIGHT = 256

const SIGIL_WIDTH = 64
const SIGIL_HEIGHT = 64

let equipmentCtx = null

let sigilsCtx = null


function renderEquipment() {
    const equipmentId = player.equipment.id
    if (!equipmentCtx) {
        const canvas = document.getElementById('equipment__display-canvas')
        canvas.width = EQUIPMENT_WIDTH
        canvas.height = EQUIPMENT_HEIGHT
        equipmentCtx = canvas.getContext("2d")
        equipmentCtx.textAlign = "center"
    }
    // drawImage(equipmentId)
    drawText(equipmentId)
    renderSigils()
}

function renderSigils() {
    const sigils = player.equipment.sigils || []
    if (!sigilsCtx) {
        setSigilsContext()
    }
    for (let i = 0; i < MAX_SIGILS; ++i) {
        const s = i < sigils.length ? sigils[i] : null
        const blocked = i >= getItemById(player.equipment.id).maxSigils
        renderSigil(s, i, blocked)
    }
}

function renderSigil(sigil, index, blocked) {
    const ctx = sigilsCtx[index]
    ctx.clearRect(0, 0, SIGIL_WIDTH, SIGIL_HEIGHT)
    ctx.font = "14px Arial"
    if (blocked) {
        ctx.fillText('Block', SIGIL_WIDTH / 2, SIGIL_HEIGHT / 2)
        return
    }
    if (sigil) {
        ctx.fillText(getItemById(sigil.id).name, SIGIL_WIDTH / 2, SIGIL_HEIGHT / 2)
    } else {
        ctx.fillText('Empty', SIGIL_WIDTH / 2, SIGIL_HEIGHT / 2)
    }
}

function drawImage(equipmentId) {
    const itemImg = new Image()
    const spriteInfo = getItemSpriteInfo(equipmentId)
    itemImg.src = spriteInfo.path

    equipmentCtx.drawImage(itemImg, 0, 0)
}

function drawText(equipmentId) {
    const item = getItemById(equipmentId)
    equipmentCtx.clearRect(0, 0, EQUIPMENT_WIDTH, EQUIPMENT_HEIGHT)
    equipmentCtx.font = "30px Arial"
    equipmentCtx.fillText(item.name, EQUIPMENT_WIDTH / 2, EQUIPMENT_HEIGHT / 2)
}


function setSigilsContext() {
    sigilsCtx = []
    for (let i = 0; i < MAX_SIGILS; ++i) {
        const sigilCanvas = document.getElementById(`equipment__sigil-canvas--${i}`)
        if (sigilCanvas) {
            sigilCanvas.width = SIGIL_WIDTH
            sigilCanvas.height = SIGIL_HEIGHT
            const ctx = sigilCanvas.getContext("2d")
            ctx.textAlign = "center"
            sigilsCtx.push(ctx)
        }
    }
}