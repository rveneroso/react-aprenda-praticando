  // nomeada
  let Retangulo = class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };

// O modo de se criar uma variável do tipo Retangulo ficou idêntico ao que foi feito com uma classe
// anônima. Até esse ponto dos estudos, não vi nenhuma diferença entre classes nomeadas e anônimas.
let ret = new Retangulo(5,8);
console.log(ret.altura);
console.log(ret.largura);