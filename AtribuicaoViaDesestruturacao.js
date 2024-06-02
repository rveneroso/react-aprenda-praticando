// Sem desestruturação — antes da ES6

const livros = ["CSS3", "HTML5", "JavaScript", "React"];
console.log("========= Sem desestruturação =====")
console.log(livros[0]); //  CSS3
console.log(livros[3]); //  React

//Com desestruturação — a partir da ES6

const livros2 = ["CSS3", "HTML5", "JavaScript", "React"];
let [css, html5, js, react] = livros2; // aqui a desestruturação
console.log("========= Com desestruturação =====")
console.log(css); //  CSS3
console.log(react); //  React

// É possível utilizar a desestruturação sem extrair TODOS os elementos do objeto original.
// No exemplo abaixo eu extraí apenas os três primeiros elementos do objeto original livros.
// O código funciona normalmente. Obviamente que o elemento 'React' não faz parte do
// array resultante.

let  [a, b, c] = livros;
console.log('Desestruturação para um array com menos elementos que o original ' + a);
console.log('Desestruturação para um array com menos elementos que o original ' + c);

//Sem desestruturação — antes da ES6
const livros1 = [
  { titulo: "React", autor: "Maurício Samy Silva" },
  { titulo: "Node Essencial", autor: "MRicardo R. Lecheta" },
  { titulo: "UX Desing", autor: "Will Grant" }
];

console.log("========= Sem desestruturação =====")
console.log(livros1[0].titulo); //  React
console.log(livros1[2].autor); //  Will Grant

//Com desestruturação — a partir da ES6

let [livroslUm, livroslDois, livroslTres] = livros1;
console.log("========= Com desestruturação =====")
console.log(livroslUm.titulo); //  React
console.log(livroslTres.autor); //  Will Grant