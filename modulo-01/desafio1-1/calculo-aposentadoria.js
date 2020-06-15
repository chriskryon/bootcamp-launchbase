const nome = "Fulano";
const sexo = "M";
const idade = 60;
const contribuicao = 35;

if (contribuicao >= 35) {
    if (idade + contribuicao >= 95 && (sexo == 'M' || sexo == 'F')) {
        console.log(`${nome}, você pode se aposentar!`);
    } else if (idade + contribuicao >= 85 && sexo === 'F') {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você não pode se aposentar!`);
    }
} else if (contribuicao >= 30 && idade + contribuicao >= 85 && sexo === 'F') {
    console.log(`${nome}, você pode se aposentar!`);
} else {
    console.log(`${nome}, você não pode se aposentar!`);
}