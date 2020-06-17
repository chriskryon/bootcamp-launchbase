/* 
Esses valores são falsy, considerados como false
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')

truty são todos diferente de falsy, alguns exemplos:
if (true), if ({})
if ([]), if (42), if ("foo")
if (new Date()) , if (-42) , if (3.14)
if (-3.14), if (Infinity), if (-Infinity)
*/

const alunos = [
    {
        nome: 'Fulano',
        nota: 5,
    },
    {
        nome: 'Beltrano',
        nota: 9.5,
    },
    {
        nome: 'Ciclano',
        nota: 10,
    }
];

const marcaComoReprovado = aluno => {
    aluno.reprovado = false

    if (aluno.nota <= 5) aluno.reprovado = true;
}

const enviaMensagemReprovado = aluno => {
    if(aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`);
    }
}

const alunosReprovados = alunos => {
    for (aluno of alunos) {
        marcaComoReprovado(aluno);
        enviaMensagemReprovado(aluno);
    }
}

alunosReprovados(alunos);
console.table(alunos);