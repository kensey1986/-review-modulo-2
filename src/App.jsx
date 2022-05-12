import { useState } from 'react'
import { Saludo } from './components/Saludo'
import logo from './logo.svg'
import './App.css';
function App() {
  
 const nombre = 'pepito';
 const edad = 65;
 const civil = true;

 const nombre2 = 'juanito';
 const edad2 = 35;
 const civil2 = false;

  return (
    <div className="App">
      <Saludo 
       name={nombre}
       edad={edad}
       estado={civil}
       madre={'susanita'}

      />

     

      <h1>mi app</h1>
      <p> hola mundo </p>

      <Saludo 
       name={nombre2}
       edad={edad2}
       estado={civil2}
       madre={'emilia'}
      />
      <h3>
        otro componente
      </h3>
      <Saludo 
       name={'Laura'}
       edad={65}
       estado={true}
       madre={'no tiene nombre'}

      />
    </div>
  )
}

export default App
