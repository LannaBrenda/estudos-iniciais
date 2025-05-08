let count = 1;
while (count <= 5) {
  console.log("O contador está em: ", count);
  count++;
}

// do {
//   console.log(count);
//   count++;
// } while (count < 5);
/*
let password = ;
do {
  password = prompt("digite uma senha");
  console.log(password);
} while (!password);
*/

//Crie um programa que peça ao usuário para inserir números até que ele digite um número negativo e em seguida, exiba a soma de todos oss números inseridos

let numerosInseridos;
let soma = 0;
let listaNumerosInseridos = [];

do {
  numerosInseridos = parseFloat(prompt("digite um número"));
  if (!isNaN(numerosInseridos) && numerosInseridos >= 0) {
    soma += numerosInseridos;
    listaNumerosInseridos.push(numerosInseridos);
  } else if (isNaN(numerosInseridos)) {
    alert("Entrada inválida. Por favor, digite um número.");
  }
} while (numerosInseridos >= 0);
console.log("ultimo número inserido", numerosInseridos);
console.log("soma dos números inseridos", soma);
console.log("lista de números inseridos", listaNumerosInseridos);
