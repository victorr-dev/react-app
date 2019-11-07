import React from 'react';
import logo from './logo.svg';
import MiComponente from './components/MiComponente'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <section className='componentes'>
        <MiComponente/>
        <MiComponente/>
        <MiComponente/>

      </section>
    </div>
  );
}

export default App;
