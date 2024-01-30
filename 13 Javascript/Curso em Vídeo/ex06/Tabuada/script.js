function exec(){
    var number = document.getElementById('num').value
    var show = document.getElementById('res')

    show.innerHTML = ""
    if (number == ""){
        alert("Digite um número")
    } else
    for (let i = 0; i <= 10; i++) {
        show.innerHTML += `${number} x ${i} = ${number*i} <br>`                
    }
}