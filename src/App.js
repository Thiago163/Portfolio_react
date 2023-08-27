import React from 'react';
// components
import Pagina from './components/Pagina';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Trabalhos from './components/Trabalhos';
import Contact from './components/Contact';
import './index.css';

const App = () => {
  return (
    <div className='fundo'>
      <Header />
      <Pagina />
      <Nav />
      <About />
      <Trabalhos />
      <Contact />
    </div>
  );
};

export default App;
