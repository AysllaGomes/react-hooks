import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Sobre from './Sobre';
import Header from './Header';
import Produto from './Produto';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoCustomizado from './ProdutoCustomizado';
import PaginaNaoEncontrada from './PaginaNaoEncontrada';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route
            path=""
            element={<ProdutoDescricao></ProdutoDescricao>}
          ></Route>
          <Route
            path="avaliacao"
            element={<ProdutoAvaliacao></ProdutoAvaliacao>}
          ></Route>
          <Route
            path="customizado"
            element={<ProdutoCustomizado></ProdutoCustomizado>}
          ></Route>
        </Route>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
