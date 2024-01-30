const botaoPlayPause = document.getElementById('play-pause')
const audioCapitulo = document.getElementById('audio-capitulo')
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const pCapitulo = document.getElementById('capitulo')

let capituloAtual = 1
let tocando = false

botaoPlayPause.addEventListener('click', tocarOuPausar)
botaoProximo.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', voltarFaixa)

function tocarFaixa(){
    audioCapitulo.play()
    tocando = true
    botaoPlayPause.classList.add('bi-pause-circle')
    botaoPlayPause.classList.remove('bi-play-circle')
}
function pausarFaixa(){
    audioCapitulo.pause()
    tocando = false
    botaoPlayPause.classList.add('bi-play-circle')
    botaoPlayPause.classList.remove('bi-pause-circle')
}
function tocarOuPausar(){
    if (tocando){
        pausarFaixa()
    } else {
        tocarFaixa()
    }
}
function proximaFaixa(){
    if (capituloAtual != 10){
        capituloAtual++
    } else {
        capituloAtual = 1
    }
    audioCapitulo.src = `books/dom-casmurro/${capituloAtual}.mp3`
    pCapitulo.innerText = `Capítulo ${capituloAtual}`
    tocarFaixa()
}
function voltarFaixa(){
    if (capituloAtual != 1){
        capituloAtual--
    } else {
        capituloAtual = 10
    }
    audioCapitulo.src = `books/dom-casmurro/${capituloAtual}.mp3`
    pCapitulo.innerText = `Capítulo ${capituloAtual}`
    tocarFaixa()
}