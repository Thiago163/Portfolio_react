import React from 'react';
// components
import Pagina from './components/Pagina';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Trabalhos from './components/Trabalhos';
import Tecnologias from './components/Tecnologias';
import './index.css';

const App = () => {
  return (
    <div className='fundo'>
      <Header />
      <Pagina />
      <Nav />
      <About />
      <Trabalhos />
      <Tecnologias />
    </div>
  );
};

export default App;
