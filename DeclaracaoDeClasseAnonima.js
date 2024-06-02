// sem nome
let Retangulo = class {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  };

// Eu havia pensado que, como a variável Retangulo foi criada através de uma classe anônima, uma
// variáve do tipo Retangulo poderia ser criada e manipulada como um variável qualquer. Porém, não
// é assim. Se eu não utilizar new na linha abaixo, ocorre um erro em tempo de execução.
let ret = new Retangulo(5,8);
console.log(ret.altura);
console.log(ret.largura);