function carregar(){
    var texto = document.getElementById('texto')
    var foto = document.getElementById('foto')
    var data = new Date()
    var Bom = document.getElementById('Bom')
    var hora = data.getHours()
    var minutos = data.getMinutes()
    texto.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 0 && hora < 12){
        foto.src = 'Imagens/Manha.jpg'
        Bom.innerHTML = `Bom Dia`
        document.body.style.backgroundColor = 'rgb(151, 168, 0)';
    } else if (hora >= 12 && hora < 18){
        foto.src = 'Imagens/Tarde.jpg'
        Bom.innerHTML = `Boa Tarde`
        document.body.style.backgroundColor = 'rgb(231, 231, 231)'
    } else {
        foto.src = 'Imagens/Noite.jpg'
        document.body.style.backgroundColor = 'rgb(0, 5, 70)'
        document.body.style.color = 'white'
        texto.style.color = 'black'
        Bom.style.color = 'black'
        Bom.innerHTML = `Boa Noite`
    }
}