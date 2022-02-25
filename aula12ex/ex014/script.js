function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes() 
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if (hora >= 0 && hora < 6){
        //madrugada
        img.src = 'madrugada.gif'
        document.body.style.background = 'rgb(26, 6, 104)'

    }else if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = 'day.png'
        document.body.style.background = 'rgb(194, 194, 243)'

    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.gif'
        document.body.style.background = 'rgb(216, 128, 128)'

    }else {
        //boa noite
        img.src = 'night2.png'
        document.body.style.background = 'rgb(49, 48, 53)'
    }
}


