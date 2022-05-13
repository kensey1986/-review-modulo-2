import { useState } from 'react'
import { Saludo } from './components/Saludo'
import './App.css';

function App() {
  
 

 const persona1 = { nombre: 'pepito', edad: 65, civil: true}
 const persona2 = { nombre: 'juanito', edad: 35, civil: false}
 const persona3 = { nombre: 'laura', edad: 45, civil: true}

//  console.log('persona')
//  console.log(persona1.amigos);

  return (
    <div className="App">
      <Saludo 
       persona={persona1}

      />

      <h1>mi app</h1>
      <p> hola mundo </p>

      <Saludo 
      persona={persona2}
      />
      <h3>
        otro componente
      </h3>
      <Saludo 
        persona={persona3}
      />
    </div>
  )
}

export default App
