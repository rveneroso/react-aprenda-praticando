import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/TabelaFoot";

class App extends Component {
  state = {
    livros: []
  };
  componentDidMount() {
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error) {
        console.log("Erro na requisição");
      })
      .finally(function() {
        console.log("Sempre retorna");
      });
  }
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({ livros });
  }
  // O código das funções handleOrdenarCrescente e handleOrdenarDecrescente estão diferentes do que
  // está no livro por 2 motivos:
  // 1 - A ordenação não estava funcionando. A comparação original não tratava todos os casos:
  //     o título de a pode ser menor, igual ou maior que o título de b. A comparação original
  //     testava se o título de a é menor que o de b. Caso não fosse, assumia-se o valor 0, que
  //     trata os 2 tíulos como iguais;
  // 2 - A função sort altera diretamente o valor original. Porém, o React pode não identificar 
  //     essa alteração já que a referência ao array não mudou.
  // Obtive essas informações do ChatGPT e as implementei aqui.
  handleOrdenarCrescente = () => {
    const livros = [...this.state.livros].sort((a, b) =>
    // const livros = this.state.livros.sort((a, b) =>
      //a.titulo < b.titulo ? -1 : 0
      a.titulo.localeCompare(b.titulo)
    );
    this.setState({ livros })
  }
  handleOrdenarDecrescente = () => {
    const livros = [...this.state.livros].sort((a, b) =>
    // const livros = this.state.livros.sort(( a, b) =>
      // a.titulo < b.titulo ? -1 : 0
      b.titulo.localeCompare(a.titulo)
    );
    // livros.reverse();
    this.setState({ livros })
  }
  render() {
    return (
      <table className="tabela">
        <TabelaHead 
          ordenarCrescente={ this.handleOrdenarCrescente }
          ordenarDecrescente={ this.handleOrdenarDecrescente }
        />
        <TabelaFoot qdeLivros={ this.state.livros.length }/>
        <TabelaBody 
          livros={ this.state.livros }
          removerLinha={ this.handleRemoverLinha }
        />
      </table>
    );
  }
}

export default App;
