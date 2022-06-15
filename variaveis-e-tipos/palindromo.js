//soluição 1

var input1 = prompt('Insira a palavra/frase: ');

//palindromo(input1);

function palindromo(palavra) {
    let texto, textoInverso

    if (!palavra) return 'insira uma string válida';

    texto = removeEspacos(palavra);
    texto = removeLetraMaiuscula(texto);
    textoInverso = inverteTexto(texto);

    alert(texto == textoInverso ? 'É um palíndromo' : 'Não é um palíndromo')

}


function removeEspacos(palavra) {
    return palavra.replace(/\s+/g, '');
}

function removeLetraMaiuscula(palavra) {
    return palavra.toLowerCase();
}

function inverteTexto(palavra) {
    return palavra.split('').reverse().join('');
}

//solução 2

function palindromo2(palavra) {
    let texto, verificador

    if (!palavra) return 'insira uma string válida';

    texto = removeEspacos(palavra);
    texto = removeLetraMaiuscula(texto);
    verificador = 'É um palíndromo';

    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] != texto[texto.length - i - 1]) {
            verificador = 'Não é um palíndromo';
        }
    }

    alert(verificador)

}

palindromo2(input1);
