import './App.css';
import Titulo from './componentes/Titulo/Titulo';
import Paragrafo from './componentes/Paragrafo/Paragrafo';
import Imagem from './componentes/Imagem/Imagem';
import Lista from './componentes/Lista/Lista';
import Botao from './componentes/Botao/Botao';

function App() {
  return (
    <div className="app">
      <Titulo />
      <Paragrafo />
      <Imagem />
      <Lista />
      <Botao />
    </div>
  );
}

export default App;
