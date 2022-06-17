function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos
        } anos de idade.`;
}

const PESSOA = {
    nome: 'João',
    idade: 50
}

console.log(calculaIdade.call(PESSOA, 5));
console.log(calculaIdade.apply(PESSOA, [10]));
