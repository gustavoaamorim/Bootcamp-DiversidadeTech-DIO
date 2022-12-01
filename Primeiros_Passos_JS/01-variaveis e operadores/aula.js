let variavel = 10; //uma variavel let pode ser reatribuída

const valor = 15; // uma constante não pode ser reatribuída

/*calculando o valor gasto em combustível em uma viagem usando as variáveis:
-Preço do combustível;
-Quantidade média de combustível que o carro consome (litros/km);
-Distância em km da viagem; */

let precoCombustivel = 5.2;
let consumoMedioLitro = 0.2; //consumo médio do carro 0.2L/km
let distanciaViagemKm = 400; //distância total da viagem em km

let combustivelViagem = consumoMedioLitro * distanciaViagemKm;
let valorGasto = precoCombustivel * combustivelViagem;

console.log('Quantidade de combustível utilizado: ' + combustivelViagem + 'L');
console.log('O valor gasto com combustível na viagem é de R$' + valorGasto);

