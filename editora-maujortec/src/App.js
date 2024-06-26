import React, { Component } from 'react';
/* 
  No livro o autor utilizou o componente Switch para mapear os caminhos (links)
  Porém, parece que esse componente não existe mais na versão do react-router-dom que estou
  usando. Pesquisando na internet, vi que o componente Switch foi substituído pelo Routes.

  Outra mudança é no uso do componente Route. As páginas não estavam renderizando e eu pedi ajuda
  ao ChatGPT, que deu as seguintes recomendações:
  
  The issue lies in the incorrect usage of the Route component's props in the newer version of 
  react-router-dom. In the version you are using, the render, component, and exact props have been 
  deprecated in favor of a simplified and more consistent API.

  Here's how you can fix the code:

  Replace render, component, and exact with the element prop.
  Use element to pass JSX directly for each route.

  Key changes:

  Replaced exact path with just path.
  Replaced render and component with element and passed the corresponding component as JSX.

*/
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import Programacao from './components/Programacao';
import Design from './components/Design';
import Frontend from "./components/Frontend";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape"
import "./index.css";
import Livro from "./components/Livro";
import axios from "axios";

class App extends Component {
  state = {
    livros: []
  };


  async componentDidMount() {
    try {
      const { data: livros } = await axios.get("api/todosOsLivros.json");
      this.setState({ livros });
    } catch (error) {
      console.log(error);
      document
        .querySelectorAll(".principal")[0]
        .insertAdjacentHTML(
          "beforeend",
          "<p class='erro'>Mensagem de erro</p>"
        );
    }
  }
  
  /*
  componentDidMount() {
    fetch("/api/todosOsLivros.json")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(livros => this.setState({ livros }))
      .catch(error => {
        console.error('Error fetching the JSON file:', error);
        document
          .querySelectorAll("main")[0]
          .insertAdjacentHTML('beforeend', '<p class="alerta">Mensagem de erro</p>');
      })
      .finally(() => {
        console.log("Sempre retorna");
      });
  }
  */

  render() {
    console.log('App state livros:', this.state.livros);
    return (
      <Router>
        <Topo />
        <Routes>
          <Route path="/" element={<Home livros={this.state.livros} />} />
          <Route path="/frontend" element={<Frontend livros={this.state.livros} />} />
          <Route path="/programacao" element={<Programacao livros={this.state.livros} />} />
          <Route path="/design" element={<Design livros={this.state.livros} />} />
          <Route path="/catalogo" element={<Catalogo livros={this.state.livros} />} />
          <Route path="/livro/:livroSlug" element={<LivroWrapper livros={this.state.livros} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </Router>
    );

  }
}

const LivroWrapper = ({ livros }) => {
  const { livroSlug } = useParams();
  const livro = livros.find(livro => livro.slug === livroSlug);
  return livro ? <Livro livro={livro} /> : <NotFound />;
};

export default App;