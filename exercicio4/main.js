function contar() {
    let numero = document.getElementById('txtnum').value
    let tabuada = document.getElementById('seltab')
    if(numero == 0) {
        window.alert("erro. Tente Novamente")
    } else {
        tabuada.innerHTML = ''
        for(let i = 0; i <= 10; i ++) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${i} x ${numero} = ${i*numero}`
            tabuada.appendChild(item)
        } 
    }
    
}



