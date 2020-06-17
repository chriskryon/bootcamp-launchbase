const desenvolvedor = {
    nome: 'Elfo Tusk',
    idade: 27,
    tecnologias: [
        {
            nome: 'Assembly',
            especialidade: 'Dar vidas a objetos eletrônicos'
        },
        {
            nome: 'C++',
            especialidade: 'Programação para módulo de aclopação de naves espaciais'
        }
    ]
};

console.log(`O usuário ${desenvolvedor.nome} tem ${desenvolvedor.idade} anos e usa as tecnologias:
    ${desenvolvedor.tecnologias[0].nome} com a especialidade de ${desenvolvedor.tecnologias[0].especialidade}
    e ${desenvolvedor.tecnologias[1].nome} com a especialidade de ${desenvolvedor.tecnologias[1].especialidade}`
);