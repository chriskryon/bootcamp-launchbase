const alunos = [
    {
        nome: 'Fulano',
        nota: 9
    },
    {
        nome: 'Beltrano',
        nota: 9.5
    },
    {
        nome: 'Ciclano',
        nota: 10
    }
];

function calculaMedia(alunos) {
    let media = 0;
    for(let i = 0; i < alunos.length; i++) {
        media += alunos[i].nota;
    }
    return media /= alunos.length;
}

console.log(calculaMedia(alunos));

/*

Existem outras estruturas de repetição, como:

do
  declaracao
while (condicao);

while (condicao)
  declaracao

Esse interage com o nome das propriedades
for (variavel in objeto) {
  declaracoes
}

Esse interage com o valor das propriedades
for (variavel of objeto) {
  declaracoes
}

*/