/*Faça um programa para calcular o valor de uma viagem
Você terá 5 variáveis. Sendo elas:
1- Preço etanol;
2- Preço gasolina;
3- Tipo de combustível que está no carro;
4- Gasto médio de combustível do carro por km;
5- Distância em km da viagem; */

let combustivelNoCarro = 'etanol';
const gastoKmPorLitro = 10;
let distanciaViagemKm = 400;

let litrosViagem = distanciaViagemKm / gastoKmPorLitro;

if( combustivelNoCarro == 'gasolina') {
    const precoGasolina = 5.2;
    let valorGastoViagem = precoGasolina * litrosViagem;
    console.log('O valor gasto em gasolina é de R$' + valorGastoViagem);
} else if (combustivelNoCarro == 'etanol') {
    const precoEtanol = 4.2;
    let valorGastoViagem = precoEtanol * litrosViagem;
    console.log('O valor gasto em etanol é de R$' + valorGastoViagem);
} else {
    console.log('Tipo de combustível não identificado');
}