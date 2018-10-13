function somar (valorA, valorB) {
    return valorA + valorB
}
function subtrair(valorA, valorB){
    return valorA - valorB
}
function dividir(valorA, valorB){
    return valorA / valorB
}
function multiplicar(valorA, valorB){
    return valorA * valorB
}

const calculadora = {
    somar: somar,
    subtrair: subtrair,
    dividir: dividir,
    multiplicar: multiplicar
}

module.exports = calculadora