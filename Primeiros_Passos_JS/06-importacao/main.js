
const {gets, print} = require('./funcoes-auxiliares'); //importando as funções presentes em outro arquivo
/*
    Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1-100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/

const numerosSorteados = [];

for(let i = 0; i<5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for(let i = 0; i<numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);

/* outra forma de solucionar e ter um código mais compacto é fazendo a comparação de maiorValor diretamente no 'for' com gets()

    let maiorValorEncontrado = 0;

    for(let i = 0; i<5; i++) {
        const numeroSorteado = gets();
        if(numeroSorteado > maiorValorEncontrado) {
            maiorValorEncontrado = numeroSorteado;
        }
    }

    print(maiorValorEncontrado);

*/
