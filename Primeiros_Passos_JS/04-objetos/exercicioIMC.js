/* 
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    O programa deve ter a capacidade de dizer o valor do IMC (IMC = peso / (altura*altura)) da pessoa instanciada e sua classificação (peso normal, abaixo do peso, etc.);
    Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMC. 
*/

class Pessoa {

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if(imc < 18.5) {
            return 'Abaixo do peso';
        } else if(imc >= 18 && imc <25) {
            return 'Peso normal';
        } else if(imc >=25 && imc<30) {
            return 'Acima do peso';
        } else if(imc >=30 && imc<40) {
            return 'Obesidade';
        } else {
            return 'Obesidade grave';
        }
    }

}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

const gustavo = new Pessoa('Gustavo', 75, 1.72);
console.log(gustavo);
console.log(gustavo.calcularImc());
console.log(gustavo.classificarImc());