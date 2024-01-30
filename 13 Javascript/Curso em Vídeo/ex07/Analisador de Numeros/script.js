var numeros = []
var select = document.getElementById('sel')
var input = document.getElementById('num')
var final = document.getElementById('fim')

function adicionar(){    
    var a = Number(input.value)

    //Checando se o número está na lista
    if(numeros.indexOf(a) == -1){
    numeros.push(a)
    var item = document.createElement('option')
    item.text = `${a} adicionado`
    select.appendChild(item)
    final.innerHTML = ''
    } else {
        alert('O número já foi adicionado')
    }
    input.value = ''
    input.focus()
}

function finaliza(){
    if(numeros.length == 0){
        alert("Adicione números antes de finalizar")
    } else
    final.innerHTML = `<br>Ao final, os  numeros adicionados foram ${numeros} <br><br>
    No total são ${numeros.length} números <br><br>
    A soma deles é ${somar()} <br><br>
    A média é ${somar()/numeros.length} <br><br>
    O maior número é o ${maior()}`
}

function somar(){
    var soma = 0
    for (index in numeros){
        soma += numeros[index]
    }
    return soma
}

function maior(){
    var maior = numeros[0]
    for(let i = 1; i < numeros.length; i++){
        if (numeros[i] > maior){
            maior = numeros[i]
        }
    }
    return maior
}

function limpar(){
    numeros = []
    final.innerHTML = 'Não há numeros adicionados'
    select.length = 0
}