function openBank() {
    blockFishing.bank = true
    renderBank()
}

function closeBank() {
    delete blockFishing.bank

    const bankElem = document.getElementsByClassName('bank')[0]
    bankElem.classList.remove('bank--open')
}

function renderBank() {

    const bankElem = document.getElementsByClassName('bank')[0]
    bankElem.classList.add('bank--open')

    const bankItemsElem = document.getElementsByClassName('bank__items')[0]
    clearChilds(bankItemsElem)

    bankItemsElem.insertAdjacentHTML('beforeend',
        bank.map((item, index) => {
            const itemTemplate = getItemById(item.id)
            return renderBankItem(item, itemTemplate, index)
        }).join('')
    )

}

function renderBankItem(item, itemTemplate, index) {
    return `
    <div class="bank__items-slot">
        ${itemTemplate.name}
        ${item.quantity ? `<div>${item.quantity}</div>` : ''}
        ${renderBankItemTooltip(itemTemplate, index)}
    </div>`
}

function renderBankItemTooltip(item, index) {
    return `
        <div class="bank__items-slot-tooltip">
            <span>${item.name}</span>
            <span>${item.category}</span>
            ${equipableEquipmentRender(item, index)}
        </div>
    `
}


function equipableEquipmentRender(item, index) {
    if(item.category === ITEM_CATEGORY.EQUIPMENT) {
        return `<button onclick="equipEquipmentFromBank(${index})">Equip</button>`
    }
    if(item.category === ITEM_CATEGORY.SIGILS) {
        return `<button onclick="equipSigilFromBank(${index})">Equip</button>`
    }
    return ''
}
