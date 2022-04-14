function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fano.value.lenght == 0 || fano.value > ano) {
        res.innerHTML = `Verifique os dados e tente novamente`
    } else {
        let fsex = document.getElementsByName('radisex')
        idade = ano - Number(fano.value)
        let genero

        if(fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    }
}



