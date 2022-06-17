
function alunosAprovados(alunos, mediaFinal) {
    let alunosAprovados = [];
    for (let i = 0; i < alunos.length; i++) {
        const { nome, nota } = alunos[i];
        if (nota >= mediaFinal) {
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

const MEDIA_FINAL = 6;
const ALUNOS = [
    {
        nome: "Antônio",
        nota: 5,
    },
    {
        nome: "Joaquim",
        nota: 6,
    },
    {
        nome: "Maria",
        nota: 2,
    },
    {
        nome: "João",
        nota: 7,
    },
    {
        nome: "José",
        nota: 1,
    }
];

console.log(alunosAprovados(ALUNOS, MEDIA_FINAL));
