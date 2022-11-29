/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dada a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso. 
*/

class Carro {

    constructor (marca, cor, rendimentoKmporLitro) {
        this.marca = marca;
        this.cor = cor;
        this.rendimentoKmporLitro = rendimentoKmporLitro;
    }

    calcularGasto(distancia, precoCombustivel) {
        let valorGasto = (distancia / this.rendimentoKmporLitro) * precoCombustivel;
        console.log(`O valor gasto na viagem será de ${valorGasto.toFixed(2)} reais`);
    }
}

const carro = new Carro('chevrolet', 'vermelho', 10);
console.log(carro);
carro.calcularGasto(100, 5);

const gol = new Carro('volks', 'prata', 7.8);
console.log(gol);
gol.calcularGasto(100, 5);

const uno2021 = new Carro('fiat', 'preto', 12.3);
console.log(uno2021);
uno2021.calcularGasto(100, 5);