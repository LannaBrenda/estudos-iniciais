function alerta() {
  console.log("Alerta"); //executa o código depois de um determinado tempo
}
setTimeout(alerta, 3000);

setTimeout(() => {
  console.log("Alerta em callback");
}, 4000);

function alerta2() {
  console.log("Alerta num intervalo de tempo"); //executa o código num intervalo de tempo
}
setInterval(alerta2, 5000);

setInterval(() => {
  console.log("Alerta num intervalo de tempo dentro de callback");
}, 4000);

//Promises

function buscaDadosDoServidor() {
  //código que simula uma busca no servidor
  return new Promise((resolve, reject) => {
    console.log("Buscando dados no servidor");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;

      if (sucesso) {
        resolve("Dados recebidos com sucesso!");
      } else {
        reject("Falha ao enviar os dados!");
      }
    }, 2500);
  });
}

buscaDadosDoServidor()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro);
  });
//outra forma de chamar uma função assincrona
const minhaFuncao = async () => {
  try {
    const resultado = await buscaDadosDoServidor();
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  }
};

//JSON
const produto = [
  { id: 1, nome: "calça", preco: 29.99 },
  { id: 2, nome: "saia", preco: 19.3 },
  { id: 3, nome: "vestido", preco: 89.0 },
  { id: 4, nome: "camiseta", preco: 39.99 },
  { id: 5, nome: "tenis", preco: 299.99 },
];
//converter dados de um objetos em JSON
const produtosJson = JSON.stringify(produto);
console.log(produtosJson);
//converter um JSON para dados de um objeto js
const produtosobj = JSON.parse(produtosJson);
console.log(produtosobj);

//Atividade proposta
//1 - Declare uma função chamada carregarProduto(ID) que recebe um parametro de ID e retorna uma nova promise com setTimeout que simula o atraso de 2 segundos e após esses segundos cria o objeto produto com id, nome e preço
//2 - Chame e invoque essa função carregarProduto(1) usando o .then para processar o produto. converta para Json, imprima e reverta para objeto. Use o try Catch para lidar com erros

function carregarProduto(id) {
  return new Promise((resolve, reject) => {
    console.log("Cadastrando dados...");

    setTimeout(() => {
      let sucesso = Math.random() > 0.5;
      const produto1 = { id: id, nome: "maça", preco: 12 };

      if (sucesso) {
        resolve(produto1);
      } else {
        reject("Falha ao cadastrar produto, revise os dados inseridos!");
      }
    }, 2000);
  });
}

carregarProduto(1)
  .then((mensagem) => {
    console.log("Produto: ", mensagem);

    const produtoJson = JSON.stringify(mensagem);
    console.log("Produto (JSON):", produtoJson);

    const reverter = JSON.parse(produtoJson);
    console.log("JSON revertido:", reverter);
  })
  .catch((erro) => {
    console.log(erro);
  });
