// const linha1 = [
//   [21, 92, 63, 44],
//   [9, 22, 13],
//   [1, 78, 5],
//   [90, 42, 77, 1],
// ];
// const array2 = ["banana", "uva", "maçã", "laranja", "abacaxi"];
// const array1 = [34, 87, 12, 65, 91, 5, 48, 76, 29, 98, 18, 53, 71, 8, 42];

// for (let item of array1) {
//   if (item % 2 === 0) {
//     console.log(item);
//   }
// }

// console.log(array1.sort((a,b) => a - b))
// console.log(array2);
// console.log(array2.sort());
// array2.pus

// console.log(linha1);
// console.log(linha1.sort());
// console.log(linha1[0].sort((a, b) => a - b));
// console.log(linha1.length);
// console.log(linha1[1]);
// console.log(linha1[0][2]);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < array2.length; i++) {
//   console.log(array2[i] + "- fruta");
// }
// for (let item of array1) {
//   console.log(item + 2);
// }
// //criar um for of que não imprima textos que comecem com u - atividade
// for (let item of array2) {
//   if (item.array2 === "uva") {
//     continue;
//   }
//   console.log(item);
// }

//-----------------------------------------------------------------------//

/*Dado o array de bebidas:
const bebidas = ["refrigerante", "água", "suco", "leite", "guaraná"];
Utilizando o for ou for of, imprima as palavras contidas no array
*/
const bebidas = ["refrigerante", "água", "suco", "leite", "guaraná"];
for (let drinks of bebidas) {
  console.log(drinks);
}

//-*-*-*-*-*-*-*-*-*-*-*//
/*
Dado o array de números:
const numeros = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
Utilizando o for ou for of, some todos os valores do array e imprima o resultado;
*/
const numeros = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
let somar = 0;
for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
console.log("A soma dos valores dentro do array é: ", somar);

//-*-*-*-*-*-*-*-*-*-*-*//
//for...in
// const ages = {
//   Robert: 23,
//   Camila: 21,
//   Alfredo: 45,
//   Luana: 12,
//   Denilson: 68,
// };

// for (let person in ages) {
//   if (ages[person] % 2 === 0) {
//     console.log(person);
//   }
// }

/*
Dado o objeto 
const notas={
bimestre1:7.0,
bimestre2:3.7,
bimestre3:6.4,
bimestre4:8.6,
}

utilizando o for in, imprima a soma dos valores das notas.
após a soma dos valores, descubra a média e faça um if/else para descobrir se o aluno foi aprovado ou não. com a média sendo 7, o resultado do console, caso seja reprovado é: "O aluno não foi aprovdro com a nota...", caso tenha sido aprovado, deverá imprimir " aluno foi aprovado"
*/

//resolução:
const notas = {
  bimestre1: 7.0,
  bimestre2: 3.7,
  bimestre3: 6.4,
  bimestre4: 8.6,
};
let soma = 0;
for (let aluno in notas) {
  soma += notas[aluno];
}
// let somaNotas = Math.round(soma / 4);
let somaNotas = soma / 4;
let total = somaNotas.toFixed(2);

if (somaNotas >= 7) {
  console.log("Aluno aprovado " + total);
} else {
  console.log("O aluno não foi aprovado com a nota... " + total);
}
