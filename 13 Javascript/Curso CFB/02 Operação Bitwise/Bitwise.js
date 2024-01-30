//Podemos fazer operações com os operadores & | << >>

console.log("O operador a & b faz com que, comparado bit a bit, apenas os bits que forem 1 AND 1 irão retornar 1. Um novo número binario será formado")
let a = 10, b = 11
console.log(`${a} & ${b} = ${a&b}`)
console.log("Já o operador a | b opera de maneira similar, porém retorna 1 se qualquer um dos bits forem 1")
console.log(`${a} | ${b} = ${a|b}`)
console.log("Já o operador a >> b desloca o número b bits para a direita. Isso faz com que o número divida por 2^b")
console.log(`${a} >> 1 = ${a >> 1}`)
console.log("O operador a << b por sua vez, desloca o número b bits para a esquerda. Isso faz com que o número multiplique por 2^b")
console.log(`${a} << 2 = ${a << 2}`)