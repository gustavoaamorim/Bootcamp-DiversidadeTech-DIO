//arrays ou listas são um conjunto de dados

const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Gustavo'); //adiciona um novo item ao final da lista
alunos[2] = 'Carlos'; //adiciona um novo item no índice(posição) 4 do array, caso já exista um item nessa posição ele é sobrescrito
console.log(alunos);

alunos.pop(); //remove o último item da lista
console.log(alunos)

alunos.shift(); //remove o primeiro item da lista
console.log(alunos);

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas.length); //retorna o tamanho do array