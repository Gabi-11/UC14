import React from 'react';
// import './ListaFrutas.css';

const ListaItem = () => {
  const itens = ['Item1', 'Item2', 'Item3'];

  return (
    <ul className="lista-itens">
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListaItem;