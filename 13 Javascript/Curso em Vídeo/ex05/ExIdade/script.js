function verifica() {
    var date = new Date
    var ano = date.getFullYear()
    //alert (ano)
    var anoNiver = document.getElementById('nasci').value
    if (anoNiver > ano){
        alert("Voce não pode nascer no futuro")
    } else {
        var idade = ano - anoNiver
        var fezNiver = document.getElementsByName('niver')
        if (fezNiver[1].checked) {
            idade--;
        }
        if (fezNiver[2].checked){
            document.getElementById('resp').innerHTML = `Parabéns! Hoje você está fazendo ${idade} anos!`
        } else
        document.getElementById('resp').innerHTML = `Sua idade é ${idade} anos!`
        //alert(idade)
    }    
}