import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <h1>IPP Vota</h1>
        <div className="Login">
          <form action="" method='POST'>
            <label htmlFor="" id='cpf' >
              CPF:
            </label>
              <input type="text" name="cpf" id="cpf" />
            <input type="button" value="Enviar"/>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
