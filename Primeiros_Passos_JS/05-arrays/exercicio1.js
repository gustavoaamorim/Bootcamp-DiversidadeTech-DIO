// 1- Crie um programa que dado um número, imprima a sua tabuada até 10

const num = 5;

for (let i = 1; i <= 10; i++) {
    console.log(num *i);
}

// 2- Crie um programa que seja capaz de percorrer uma lista de números e imprima uma lista dos números pares

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = [];

for(let i=0; i<listaNumeros.length; i++){
    if(listaNumeros[i] % 2 === 0){
        numerosPares.push(listaNumeros[i]);
    }
} console.log(numerosPares);