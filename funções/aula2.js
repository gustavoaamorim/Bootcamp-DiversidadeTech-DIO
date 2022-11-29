//criar uma função que retorne um nome

function escreverNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

escreverNome('Gustavo');

//escrever uma função para verificar maioridade

function verificarMaioridade(idade) {
    if(idade >= 18) {
        console.log('Possui maioridade')
    } else {
        console.log('Não possui maioridade')
    }
}

verificarMaioridade(32);
verificarMaioridade(11);