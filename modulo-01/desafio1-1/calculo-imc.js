const nome = "Fulano";
const peso = 70;
const altura = 1.71;
const sexo = 'Masculino';

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso!`);
} else {
    console.log(`${nome} você não está acima do peso!`);
}