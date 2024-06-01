const livros = [
    { id: 1, titulo: "Construindo Sites com HTML" },
    { id: 2, titulo: "Web Scraping com Python" },
    { id: 3, titulo: "CSS3" }
  ];

  let filtraLivroPython = livro  => {
    if(livro.titulo === "Web Scraping com Python" ) {
        return livro;
    }
  }

  let livros1 = livros.find((livro) => livro.id === 3);
  /*
    Usar find() e filter() resulta quase na mesma coisa. Trouxe para cá a função que pesquisa um
    livro pelo título e usei essa função no find. O resultado foi o mesmo de quando usei função
    semelhante com filter().
  */
  let livros2 = livros.find(filtraLivroPython, undefined, livros);
  
  console.log(livros1);
  console.log(livros1.titulo);
  console.log("=================== Customização =================");
  console.log(livros2);
  console.log(livros2.titulo);