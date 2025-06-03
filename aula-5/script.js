
//retorna o quadrado de um número
function aoQuadrado(num) {
  return num * num;
}
console.log("Ao quadrado: ", aoQuadrado(3));
console.log("Ao quadrado: ", aoQuadrado(2));
function aoQuadrado1(num) {
  console.log("Function sem return: ", num * num);
}

aoQuadrado1(3);
aoQuadrado1(10);
//retorna o número dividido por 2
function divisaoPorDois(num) {
  return num / 2;
}
console.log("Dividido por 2: ", divisaoPorDois(4));
console.log("Dividido por 2: ", divisaoPorDois(16));

console.log(
  "Divisão por dois dentro de Ao  Quadrado: ",
  aoQuadrado(divisaoPorDois(20))
);
console.log(
  "ao quadrado dentro de divisão por dois: ",
  divisaoPorDois(aoQuadrado(20))
);

function semParametros() {
  console.log("Function sem parametro");
}
semParametros();

function saudacao(titulo, nome, idade) {
  if (idade >= 18) {
    console.log(
      `Olá ${titulo}. ${nome}, a sua idade é ${idade}, parabens és maior de idade`
    );
  } else {
    console.log(
      `Olá ${titulo}. ${nome}, a sua idade é ${idade}, parabens és menor de idade`
    );
  }
}
saudacao("sra", "Ana", 17);
saudacao("Sr", "Phillipe", 21);


/*Atividades*/
/*
1. Calculadora Simples:
Objetivo: Criar funções para realizar operações matemáticas básicas.
 */
// optei por utilizar um switch case pela simplicidade de poder realizar o controle de fluxo

function operacoes(opcao, valor1, valor2) {
  let resultado;
  switch (opcao) {
    case "soma":
      resultado = `O resultado da soma é: ${valor1 + valor2}`;
      break;
    case "subtracao":
      resultado = `O resultado da subtração é: ${valor1 - valor2}`;
      break;
    case "multiplicacao":
      resultado = `O resultado da multiplicação é: ${valor1 * valor2}`;
      break;
    case "divisao":
      resultado = `O resultado da divisão é: ${valor1 / valor2}`;
      break;
    default:
      resultado = "Opção inválida!";
      break;
  }
  return resultado;
}
console.log(operacoes("soma", 1, 2));
console.log(operacoes("subtracao", 1, 2));
console.log(operacoes("multiplicacao", 1, 2));
console.log(operacoes("divisao", 1, 2));
console.log(operacoes("divisao", 100, 2));

/* 
2. Verificador de Palíndromo:
Objetivo: Praticar a manipulação de strings dentro de uma função.
*/

function ehPalindromo(palavra) {
  //   let textoFormatado = palavra.toLowerCase().replace(/\s/g, "");(remove os espaços utilizando regex)
  //   let textoInvertido = textoFormatado.split("").reverse().join("");
  //   let verificacao = textoFormatado === textoInvertido;

  //remove os espaços sem utilizar regex
  let textoProcessado = "";
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] != " ") {
      textoProcessado += palavra[i].toLowerCase();
    }
  }
  let textoInvertido = textoProcessado.split("").reverse().join("");
  let verificacao = textoProcessado === textoInvertido;

  console.log("Texto inserido: ", textoProcessado);
  console.log("Texto invertido: ", textoInvertido);
  console.log("É um palindromo: ", verificacao);
}
ehPalindromo("casa");
ehPalindromo("ANNA");
ehPalindromo("Radar");
 

//Arrow Function
// const aoQuadrado2 = (num) => num * num

function saudacao(nome, titulo) {
  console.log(`bem vindo(a) ${titulo}. ${nome}`);
}

const pessoa = {
  nome: "Maria",
  titulo: "Sra",
  saudacao: function () {
    console.log(`bem vindo(a) ${this.titulo}. ${this.nome}`);
  },

  //para utilizar o arrow function dentro de um objeto, precisa referenciar o objeto junto com a propriedade.
  // saudacao: () => console.log(`bem vindo(a) ${pessoa.titulo}. ${pessoa.nome}`)
};
pessoa.saudacao();

//Atividades propostas
//1. crie uma função qque receba dois números e retorne a soma deles, depois reescreva essa função como arrow function.

function operacao(num1, num2) {
  return num1 + num2;
}
console.log(operacao(3, 3));

const operacao2 = (num1, num2) => num1 + num2;
console.log(operacao2(4, 4));

//2. crie uma função que receba uma lista de números e retorne a soma de todos os números dessa lista. usando uma função tradicional e arrow function

let listanumeros = [1, 2, 3, 10, 20];
let soma = 0;
function listaNumericas() {
  for (let i = 0; i < listanumeros.length; i++) {
    soma += listanumeros[i];
  }
  console.log(soma);
}
listaNumericas();

let listanumeros2 = [1, 2, 3];
let soma2 = 0;
const somaDeNumeros = () => {
  for (let i = 0; i < listanumeros2.length; i++) {
    soma2 += listanumeros2[i];
  }
  return soma2;
};
console.log(somaDeNumeros());
//formas altenativas
let lista3 = [4, 4, 4];

const numero3 = (listaDeNumeros) => {
  let soma = 0;
  for (const elementos of listaDeNumeros) {
    soma += elementos;
  }
  return soma;
};
console.log(numero3(lista3));