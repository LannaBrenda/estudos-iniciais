// console.log("hello world!!!")
// let num1 = 3;
// let num2 = 1;
// let numMaior;

// if(num1 > num2){
//   numMaior = true
// }else{
//   numMaior = false
// }
// console.log(numMaior)

// numMaior = num1 > num2 ? true : false
// console.log(numMaior)
// if (num1 > num2 || num2 === num1) {
//   //o código nesse bloco será executado se a condição do IF for satisfeita
//   console.log("condição satisfeita 👍🏻");
//   console.log("o número 1 é maior ou igual ao número 2");
// } else {
//   //o codigo nesse bloco será executdo caso se a condição do IF NÃO for satisfeita
//   console.log("condição não satisfeita 👎🏻");
//   console.log("o número 1 é menor que o número 2");
//   console.log("O número 2 é maior que o número 1");
// }

const nomeAluno = prompt("Digite o nome do Aluno");
let idadeAluno = Number(prompt("Digite a idade do aluno"));

// switch (idadeAluno) {
//   case 8:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Infantil");
//     break;
//   case 9:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Infantil");
//     break;
//   case 10:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Infantil");
//     break;
//   case 11:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Juvenil");
//     break;
//   case 12:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Juvenil");
//     break;
//   case 13:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Juvenil");
//     break;
//   case 14:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Jovem Adulto");
//     break;
//   case 15:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Jovem Adulto");
//     break;
//   case 16:
//     console.log("Nome do aluno: " + nomeAluno + " Turma: Jovem Adulto");
//     break;
//   default:
//     console.log(
//       `Para verificar a turma do(a) aluno(a) ${nomeAluno}, por gentileza entre em contato com a secretaria da escola, agradecemos a sua pré matricula.`
//     );
//     break;
// }

//nesse caso, o melhor condicional seria o IF e ELSE, devido  as coindicionais da idade

if (idadeAluno === 8 || idadeAluno === 9 || idadeAluno === 10) {
  console.log("Nome do aluno: " + nomeAluno + " Turma: Infantil");
} else if (idadeAluno === 11 || idadeAluno === 12 || idadeAluno === 13) {
  console.log("Nome do aluno: " + nomeAluno + " Turma: Juvenil");
} else if (idadeAluno === 14 || idadeAluno === 15 || idadeAluno === 16) {
  console.log("Nome do aluno: " + nomeAluno + " Turma: Jovem Adulto");
} else {
  console.log(
    `Para verificar a turma do(a) aluno(a) ${nomeAluno}, por gentileza entre em contato com a secretaria escolar, agradecemos a sua pré matricula.`
  );
}
