let numero = document.getElementById('txtnum')
let adicionar = document.getElementById('seltab')
let res = document.getElementById('resp')
let valores = []

function adiciona() {
    if(isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(numero.value)
        let item = document.createElement('option')
        item.value = `pos${numero.length}`
        item.text = `valor ${numero.value} adiciondo`
        adicionar.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert("Erro.")
    }
    numero.value = ''
    numero.focus()
}

function isNumero(param) {
    if(param >= 1 && param <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(param, l) {
    if(l.indexOf(param) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("adicione um valor")
    } else {
        let total = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`

    }
}



