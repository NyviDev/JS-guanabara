function contar() {
    let inicio = document.getElementById("txtinicio")
    let fim = document.getElementById("txtfim")
    let passo = document.getElementById("txtpasso")
    let res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("ERRO. Tente novamente")
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: '
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if(inicio < fim) {
            for(let i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1f449}`
            }
        } else {
            for(let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
    
}



