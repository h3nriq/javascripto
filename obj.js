function pareimpar(numero) {
    if (numero % 2 != 0){
        console.log('Weird')
    } else if (numero % 2 == 0 && numero >= 2 && numero <= 5){
        console.log('Not Weird')
    } else if (numero % 2 == 0 && numero >= 6 && numero <= 20){
        console.log('Weird')
    } else {
        console.log('Not Weird')
    }

}

function doisnumeros (a, b) {
   let soma = a + b
   let diferenca = a - b 
   if (b > a){
    diferenca = b - a
 }
   let produto = a * b
   return {soma, diferenca, produto}
}

function numeroanterior (numero)  {
    let menosum = numero - 1
    return menosum
}

function idade(ano, mes, dias){
    let anodia = (ano * 12) * 30
    let mesdia = (mes * 30)
    let diadia = dias
    let diastotal = anodia + mesdia + diadia
    return diastotal
}

function salario(salarioatual, reajuste) {
    let porcentagem = reajuste / 100
    let valordoreajuste = salarioatual * porcentagem
    let novosalario = valordoreajuste + salarioatual
    return novosalario
}
//Verifica o preço final do carro
function precocarro (custofabrica) {
    let distribuidor = 28 / 100
    let imposto = 45 / 100
    let precoextra = (custofabrica / imposto) / distribuidor
    let precototal = custofabrica + precoextra
    return [precototal.toFixed(2)]
}
//Verifica se o numero é inteiro
function numerosinteiros (N) {
    let meuarray = []
    i = 1
    while(i <= N){
        meuarray[meuarray.length] = i
        i++
    }
    if(N < 0){
        console.log('Numero invalido')
    }
    return meuarray

}
//Gera uma tabuada
function tabuada(N){
    meuarray = []
    
    for(i = 1; i <= 10; i++){
        let vezes = i * N
        meuarray[meuarray.length] = vezes
    }
    return meuarray
}

    
//Gera um valor aleatório do array
function randomloot(numero){
    let lootrandom = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let premio = []
    let lootlength = lootrandom.length
    for (i = 1; i <= numero; i++) {
        let loot = lootrandom[Math.floor(Math.random() * lootlength)]
        premio[premio.length] = loot
        }
    return premio
}
console.log(randomloot(4))