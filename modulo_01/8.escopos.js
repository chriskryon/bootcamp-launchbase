// Quando criamos uma variável global, ela é acessada por todo programa
// Quando criamos uma variável em um escopo, ela é acessível apenas dentro do escopo, ou em escopos abaixos

function teste() {
    let i = 0;
    if (true) {
        for(let y = 0; y < 2; y++) {
            console.log(i + 1);
            i++;
        }
    }
}

teste();