// Funções ajudam no reaproveitamento de código
// As variáveis de parâmetro podem ser utilizadas, editadas dentro do escopo da função
// O return será armazenado em uma variável, constante em que está chamando a função
// Se esquecermos de utilizar ou não utilizarmos o return, a função por padrão irá retornar undefined

function areaRet(largura, altura){
    return largura * altura;
}

// Arrow function
const areaQuadrado = (lado) => {
    return lado * lado;
}

//ou 
const areaQuadrado2 = lado => lado * lado;

// Arrow function sem parametro
const imprimeOi = () => console.log('Hello World!');

imprimeOi();