import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import CadastrarLivros from "./components/CadastrarLivros";
import NotFound from "./components/NotFound";

class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML - 2a. edição",
        autor: "Maurício Samy Silva"
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno"
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliart"
      }
    ]
  };

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [...this.state.livros, livro]
    });
  };

  editarLivro = (livro) => {
    console.log(livro);
    const index = this.state.livros.findIndex((p) => p.id === livro.id);
    const livros = this.state.livros
      .slice(0, index)
      .concat(this.state.livros.slice(index + 1));
    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id);
    this.setState({
      livros: newLivros,
    });
  };

  render() {
    return (
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<TabelaLivros livros={this.state.livros} />} />
          <Route path="/cadastrar" element={
            <CadastrarLivros 
              inserirLivro = { this.inserirLivro }
              livro = {{ id: 0, isbn: "", titulo: "", autor: "" }}/>
          }>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route 
            path="/editar/:isbnlivro"
            element={<EditarLivroWrapper livros={this.state.livros} editarLivro={this.editarLivro} />}
          />
        </Routes>
      </Router>
    );
  }
};

const EditarLivroWrapper = ({ livros, editarLivro }) => {
  const { isbnlivro } = useParams();
  const livro = livros.find(livro => livro.isbn === isbnlivro);

  console.log('Found livro:', livro); 

  return livro ? (
    <CadastrarLivros 
      editarLivro={editarLivro} 
      livro={livro} 
    />
  ) : (
    <Navigate to="/" />
  );
};

export default App;
