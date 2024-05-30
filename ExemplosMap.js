const livros = [ "CSS3", "HTML5", "JavaScript", "React", "PHP"];
let livros1 = livros.map( (livro) => "Livro " + livro);
// Na sintaxe em que passamos o índice do item sobre o qual estamos iterando, o nome da variável
// pode ser qualquer um, já que o método map(), quando recebe um segundo argumento, somente aceita
// nele o índice.
let livros2 = livros.map( (livro, anything) => "Livro" + anything + " " + livro);
console.log(livros);
console.log(livros1);
console.log(livros2);

const livrosA = [
    { titulo: "Construindo Sites com HTML", autor: "Maurício Samy Silva" },
    { titulo: "Web Scraping com Python", autor: "Ryan Mitchell" },
    { titulo: "CSS3", autor: "Maurício Samy Silva" }
  ];
  let livrosX = livrosA.map(livro => "Livro: " + livro.titulo);
  let livrosY = livrosA.map(livro => "Autor: " + livro.autor);
  console.log(livrosA); // [Object, Object, Object]
  console.log(livrosX); // ["Livro: Construindo Sites com HTML", "Livro: Web Scraping com Python", "Livro: CSS3"]
  console.log(livrosY); // ["Autor: Maurício Samy Silva", "Autor: Ryan Mitchell","Autor: Maurício Samy Silva"]
  