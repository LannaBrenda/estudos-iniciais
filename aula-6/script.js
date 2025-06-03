/*class Carro {
  constructor(marca) {
    this.marca = marca;
  }
  mostrarMarca() {
    console.log(`A marca do carro é ${this.marca}`);
  }
}

const carro1 = new Carro("Rolls Royce");

console.log(carro1.mostrarMarca());

carro1.mostrarMarca()
*/
/*
class Moto {
  constructor(fabricante, modelo, ano, combustivel) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.combustivel = combustivel;
  }
  mostrarDadosDaMoto() {
    console.log(
      `Fabricante:${this.fabricante} Modelo:${this.modelo}, Ano:${this.ano}, Combustivel:${this.combustivel}.`
    );
  }
  acelerar() {
    console.log("Vrum... Vrum...");
  }
  freiar() {
    console.log("Freiando...");
  }
}
const minhaMoto = new Moto("kawasaki", " NINJA ZX-6R", "2024", "Gasolina");
minhaMoto.mostrarDadosDaMoto();
minhaMoto.freiar();

class Carro {
  constructor(fabricante, modelo, ano, tipo, combustivel, qtdPorta) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.combustivel = combustivel;
    this.qtdPorta = qtdPorta;
  }
  mostrarDadosDoCarro() {
    console.log(
      `Fabricante:${this.fabricante} Modelo:${this.modelo}, Ano:${this.ano} Tipo:${this.tipo}, Combustivel:${this.combustivel}, Quantidade de portas: ${this.qtdPorta} Portas.`
    );
  }
  acelerar() {
    console.log("Vrum...Vrum...");
  }
  freiar() {
    console.log("freiando...");
  }
}

const meuCarro = new Carro(
  "Ford",
  "KA",
  "2008",
  "Sedan",
  "Alcool e gasolina",
  4
);
meuCarro.mostrarDadosDoCarro();
meuCarro.acelerar();
*/

class Veiculos {
  constructor(fabricante, modelo, ano, combustivel, tipo, qtdPorta) {
    this.fabricante = fabricante;
    this.modelo = modelo;
    this.ano = ano;
    this.tipo = tipo;
    this.combustivel = combustivel;
    this.qtdPorta = qtdPorta;
  }
  acelerar() {
    console.log("Vrum...Vrum...");
  }
  freiar() {
    console.log("freiando...");
  }

  mostrarDadosDoVeiculo() {
    console.log(
      `Fabricante:${this.fabricante} Modelo:${this.modelo}, Ano:${this.ano} Tipo:${this.tipo}, Combustivel:${this.combustivel}, Quantidade de portas: ${this.qtdPorta} Portas.`
    );
  }
}

class Moto extends Veiculos {
  constructor(fabricante, modelo, ano, combustivel, cilindradas) {
    super(fabricante, modelo, ano, combustivel);
    this.cilindradas = cilindradas;
  }
  mostrarDadosDoVeiculo() {
    console.log(
      `Fabricante:${this.fabricante} Modelo:${this.modelo}, Ano:${this.ano}, Combustivel:${this.combustivel}, ${this.cilindradas} cilindradas.`
    );
  }
}
class Carro extends Veiculos {
  constructor(fabricante, modelo, ano, combustivel, tipo, qtdPorta) {
    super(fabricante, modelo, ano, combustivel, tipo, qtdPorta);
  }
}
const minhaMoto = new Moto(
  "kawasaki",
  " NINJA ZX-6R",
  "2024",
  "Gasolina",
  "150"
);
minhaMoto.mostrarDadosDoVeiculo();
minhaMoto.freiar();
let meuCarro = new Carro("Ford", "KA", "2008", "Sedan", "Alcool e gasolina", 4);
meuCarro.mostrarDadosDoVeiculo();
meuCarro.acelerar();

//a verdadeira habilidade em progrmação está em organizar o código dde maneira que ele possa se reutilizado e mantido facilmente

// atividade proposta
// 1 - crie uma classe produto com as propriedades nome e preço
// 2 - adicionar o metodo mostrarDetalhes para exibir as informações do produto
// 3 - instanciar um objeto de produto e chamar o método mostrarDetalhes
// 4 - criar a classe eletronico que herda de produto e adicionar a Propriedade de garantia
// 5 - sobreescrever o método mostrarDetalhes para incluir a garantia
// 6 - instanciar um objeto de eletronico  chamar o método mostrarDetalhes

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  mostrarDetalhes() {
    console.log(`nome:${this.nome} preço: ${this.preco}`);
  }
}
const produto1 = new Produto("leite", "R$4,50");
produto1.mostrarDetalhes();

class Eletronico extends Produto {
  constructor(nome, preco, garantia) {
    super(nome, preco);
    this.garantia = garantia;
  }
  mostrarDetalhes() {
    console.log(
      `nome:${this.nome} preço: ${this.preco} garantia: ${this.garantia}`
    );
  }
}
const produto2 = new Eletronico("Emotibots", "R$500,00", "12 meses");
produto2.mostrarDetalhes()
