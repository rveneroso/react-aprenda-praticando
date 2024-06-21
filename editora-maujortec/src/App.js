import React, { Component } from 'react';
/* 
  No livro o autor utilizou o componente Swtich para mapear os caminhos (links)
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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import Programacao from './components/Programacao';
import Design from './components/Design';
import Frontend from "./components/Frontend";
import NotFound from "./components/NotFound";
import "./index.css";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/design" element={<Design />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      </Router>
    );

  }
}
export default App;