import React from 'react';
import logo from './logo.svg';
import rocket from './rocketSeat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={rocket} className="rocket-logo" alt="rocket"/>
        <p>
          Bem vindo à <b>Semana OmniStack 11.0!</b>
        </p>
        <a
          className="App-link"
          href="https://rocketseat.com.br/week/aulas/11.0?aula=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bora Codar!
        </a>
      </header>
    </div>
  );
}

export default App;
