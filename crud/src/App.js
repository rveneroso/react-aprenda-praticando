import React, { Component} from "react";
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import logo from './logo.svg';

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
  render() {
    return (
      <div className="App">
        <Menu />
        <TabelaLivros livros={this.state.livros}/>
      </div>
    );
  }
};

export default App;
