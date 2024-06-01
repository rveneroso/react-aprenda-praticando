const livros = [
    {
      titulo: "Construindo Sites com HTML",
      autor: "Maurício Samy Silva"
    },
    {
      titulo: "Web Scraping com Python",
      autor: "Ryan Mitchell"
    },
    {
      titulo: "CSS3",
      autor: "Maurício Samy Silva"
    }
  ];
let livros1 = livros.map( (livro) => "Livro - " + livro);

console.log(typeof livros)
console.log(livros1);