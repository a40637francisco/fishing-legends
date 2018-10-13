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
        bank.map(item => {
            const itemTemplate = getItemById(item.id)
            return renderBankItem(item, itemTemplate)
        }).join('')
    )

}

function renderBankItem(item, itemTemplate) {
    return `
    <div class="bank__items-slot">
        ${itemTemplate.name}
        ${item.quantity ? `<div>${item.quantity}</div>` : ''}
        ${renderBankItemTooltip(itemTemplate)}
    </div>`
}

function renderBankItemTooltip(item) {
    return `
        <div class="bank__items-slot-tooltip">
            <span>${item.name}</span>
            <span>${item.category}</span>
        </div>
    `
}
