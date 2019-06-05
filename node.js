/*function divisao([ numero1, numero2 ]) {
    if (numero2 > numero1) [numero1, numero2] = [numero2, numero1]
    let resultado = numero1 / numero2
    return resultado
}
*/
function baskara( a, b, c )  {
    let delta = Math.pow(-b, 2) - (4 * a) * c
    if (delta < 0) {
        console.log('Delta negativo')
    }
    let raiz = Math.sqrt(delta)
    let base = 2 * a
    let raiz1 = -b + raiz
    let raiz2 = -b - raiz
    let valorfinal1 = raiz1 / base
    let valorfinal2 = raiz2 / base
    return [valorfinal1.toFixed(2), valorfinal2.toFixed(2)] 
     
}
