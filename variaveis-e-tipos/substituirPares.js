const INPUT = [1, 3, 4, 6, 80, 33, 23, 90];
var output;

function substituirPares(vetor) {
    if (vetor != 0) {
        for (let index = 0; index < vetor.length; index++) {
            if (vetor[index] % 2 == 0) {
                vetor[index] = 0;
            }
        }
        return vetor;
    }
    return "-1"
}

output = substituirPares(INPUT);
alert(output);