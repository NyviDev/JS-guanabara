function carregar() {
    let mensagem = document.getElementById('mensagem')
    let imagem = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
   
    
    mensagem.innerHTML = `Agora são ${hora} horas`

    if(hora >= 4 && hora < 12) {
        document.body.style.backgroundColor = '#afdffd'
        imagem.setAttribute('src', 'img/fotomanha.jpg');
    } else if(hora >=12 && hora < 18) {
        document.body.style.backgroundColor = '#ffb50c'
        imagem.setAttribute('src', 'img/fototarde.jpg');
    } else {
        document.body.style.backgroundColor = '#1d6ba9'
        imagem.setAttribute('src', 'img/fotonoite.jpg');
    }
}



