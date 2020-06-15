// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da média

const aluno1 = 'Fulano';
const notaAluno1 = 6;

const aluno2 = 'Beltrano';
const notaAluno2 = 8.5;

const aluno3 = 'Beltrano';
const notaAluno3 = 3;

const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

console.log(media);

// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}, vocês estão de parabéns`);
} else {
    console.log(`A média foi de ${media}, vocês precisam melhorar!`);
}