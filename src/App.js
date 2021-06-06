import React from 'react';
import Limpar from './Limpar';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  );
};

export default App;
