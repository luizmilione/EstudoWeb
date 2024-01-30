let num = [7, 4, 19, 1, 0, 55]

num[6] = 5
num.push(9)

num.sort(compararNumeros)
console.log(`O vetor tem ${num.length} posicoes. Sendo ${num} seus elementos`)
/*
for(let i=0; i<num.length; i++){
    console.log(`Escrevendo em um for tradicional o valor ${num[i]}`)
}
*/
for( let i in num){
    console.log(`Escrevendo em um for aprimorado o valor ${num[i]}`)
}

console.log(`O valor 7 está na posicao ${num.indexOf(7)}`)

function compararNumeros(a, b) {
    return a - b;
  }
  