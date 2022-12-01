//criação de um método que descreve uma Pessoa e passando os parâmetros que irão ser usados para definição (nome e idade)
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }
}

const gustavo = new Pessoa(); //criação de um novo objeto Pessoa
gustavo.nome = 'Gustavo'; //atribuindo os valores para os atributos do objeto
gustavo.idade = 32;

const joao = new Pessoa();
joao.nome = 'João';
joao.idade = 24;

gustavo.descrever();
joao.descrever();

const pedro = new Pessoa('Pedro', 26); //criação usando constructor

pedro.descrever();


//criando uma função que utilizará os valores definidos nos objetos criados

function comparaPessoas(pessoa1, pessoa2) {
    if(pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}`);
    } else if(pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1} e ${pessoa2} tem a mesma idade`)
    }
}

comparaPessoas(gustavo, joao);
