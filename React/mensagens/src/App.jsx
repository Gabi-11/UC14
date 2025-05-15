// Importamos algumas funções do React:
import React, { useState, useEffect } from 'react';
// Também importamos um arquivo CSS para aplicar estilos visuais

/*Pense no useState como uma caixinha que guarda um valor e que, quando esse valor muda, a tela é atualizada automaticamente.
O useEffect serve para fazer algo quando o componente aparece ou muda. Como, por exemplo:

Atualizar o título da aba do navegador.

Buscar dados de um site.

*/
import './App.css';

// Esta é a função principal do nosso componente React. Todo componente em React é uma função que retorna o que queremos mostrar na tela.
function App() {
  // Aqui criamos um "estado" chamado advice (conselho) e uma função para atualizá-lo (setAdvice).
  // useState('') quer dizer que começamos com o valor vazio.
  const [advice, setAdvice] = useState('');

  // Esta função assíncrona busca um conselho da internet usando uma API pública.
  const fetchAdvice = async () => {
    // Fazemos uma requisição para a API de conselhos
    const response = await fetch('https://api.adviceslip.com/advice');
    
    // Pegamos o resultado e transformamos em um objeto JavaScript
    const data = await response.json();

    // Atualizamos o estado com o texto do conselho retornado
    setAdvice(data.slip.advice);
  };

  // useEffect é um "efeito colateral": ele executa algo quando o componente carrega.
  // Aqui, queremos buscar um conselho assim que a página for aberta pela primeira vez.
  useEffect(() => {
    fetchAdvice(); // Chama a função que busca o conselho
  }, []); // O array vazio [] significa que isso será executado apenas uma vez, quando o componente for montado.

  // Esta é a parte visual do nosso componente, usando JSX (parecido com HTML dentro do JavaScript).
  return (
    <div className="App">
      {/* Um container com a classe CSS "card" para aplicar estilos */}
      <div className="card">
        {/* Um título */}
        <h1>💡 Conselho do Dia</h1>

        {/* Mostra o conselho que está armazenado no estado */}
        <p>"{advice}"</p>

        {/* Um botão que, ao ser clicado, chama a função fetchAdvice para buscar um novo conselho */}
        <button onClick={fetchAdvice}>Novo Conselho</button>
      </div>
    </div>
  );
}

// Exportamos o componente para que o React possa usá-lo na aplicação
export default App; 