var num1 = parseInt(prompt('Insira o primeiro valor: '));
var num2 = parseInt(prompt('Insira o segundo valor: '));

exercicio(num1, num2);

function exercicio(n1, n2) {
    let igualdade;
    let soma;
    let comparaCom10;
    let comparaCom20;

    n1 == n2 ? igualdade = 'são' : igualdade = 'não são';

    soma = n1 + n2;
    soma > 10 ? comparaCom10 = 'maior' : comparaCom10 = 'menor';
    soma < 20 ? comparaCom20 = 'menor' : comparaCom20 = 'maior';

    alert(`Os números ${n1} e ${n2} ${igualdade} iguais. Sua soma é ${soma}, que é ${comparaCom10} que 10 e ${comparaCom20} que 20`);
}