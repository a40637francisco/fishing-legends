function openBank() {
    blockFishing.bank = true
    renderBank()
}

function closeBank() {
    delete blockFishing.bank
}

function renderBank() {

    const bankElem = document.getElementById('bank')
    // add frame and close button and items on another div and hide with display none
    clearChilds(bankElem)
    bankElem.insertAdjacentHTML('beforeend',
        bank.map(item => {
            const itemTemplate = getItemById(item.id)
            return renderBankItem(item, itemTemplate)
        }).join('')
    )

}

function renderBankItem(item, itemTemplate) {
    return `<span>${itemTemplate.name} - ${item.quantity}</span>`
}