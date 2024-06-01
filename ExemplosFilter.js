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

  /*
    A função abaixo foi criada por mim para ser usada como parâmetro na definição da
    variável livros4
  */
  let filtraLivroDoMajour = livro  => {
    if(livro.autor === "Maurício Samy Silva") {
        return livro;
    }
  }

    /*
    A função abaixo foi criada por mim para ser usada como parâmetro na definição da
    variável livros4
  */
    let filtraLivroCSS = livro  => {
        if(livro.titulo === "CSS3") {
            return livro;
        }
      }
  
  let livros1 = livros.filter(livro => livro.titulo === "CSS3");
  let livros2 = livros.filter(livro => livro.autor === "Maurício Samy Silva");
  let livros3 = livros.filter(livro => livro.titulo.includes("com"));
  // Cria a variável livros4 usando a função que eu criei antes. Minha função não utiliza o índice
  // do elemento no array então eu passei 'undefined' para omiti-lo.
  // O resultado da minha função é o mesmo da variável livros2 acima.
  let livros4 = livros.filter(filtraLivroDoMajour,undefined,livros);
  /*
    Resolvi fazer um teste e colocar um retorno do tipo map aqui. O que eu observei é que, quando
    se usa map, o objeto final tem a mesma dimensão do objeto original. No caso da variável livros5
    ela contém 3 elementos, mesma quantidade do objeto original, livros. Porém, como um dos livros
    não satisfaz a condição testada na função filtraLivroDoMajour, então um dos elementos de livros5
    retorna como 'undefined'.
  */
  let livros5 = livros.map(filtraLivroDoMajour,undefined,livros);
  // No caso da variável livro6, ela terá 2 elementos 'undefined' já que somente 1 livro
  // satisfaz a condição do filtro.
  let livros6 = livros.map(filtraLivroCSS,undefined,livros);
  
  console.log(livros1);
  console.log(livros2);
  console.log(livros3);
  console.log(livros4);
  console.log(livros5);
  console.log(livros6);
  