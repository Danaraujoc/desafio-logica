class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else {
      ataque = "shuriken";
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque} `);
  }
}
let heroi1 = new Heroi("Daniel", 33, "mago");
let heroi2 = new Heroi("Gertrudes", 25, "guerreiro");
let heroi3 = new Heroi("Zé das Couves", 40, "monge");
let heroi4 = new Heroi("Ligeirinho", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
