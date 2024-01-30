function exec() {
    var inicio = Number(document.getElementById('ini').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('pas').value)

    if(inicio == '' || fim == ''){
        alert("Preencha os dados!")
    }else {
        if (passo <= 0){
            alert("Impossível contar!")
        } else {
            var res = document.getElementById('dv2')
            res.innerHTML = ``
            
            if(inicio < fim){            
                for (let i = inicio; i <= fim; i += passo){
                    res.innerHTML += `${i} `
                }
            } else {
                for (let i = inicio; i >= fim; i -= passo){
                    res.innerHTML += `${i} `
                }
            }
                res.innerHTML += ` FIM`
        }
    }
}