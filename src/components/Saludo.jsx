import React from 'react';

export const Saludo = (props) => {
  // console.log('==========props llegan al componente==========================');
  // console.log(props.persona.nombre);
  // console.log('====================================');
  
  const  {persona} = props;
  const {nombre, edad, civil} = persona ;

  //  console.log('================persona====================');
  //  console.log(persona);
  //  console.log('====================================');
  let civil2 = 'soltero';
          // true
  if (civil === true) {
     civil2 = 'casado';
  }
  
  return (
    <div>Saludando a <strong> {nombre} </strong> quien tiene una 
    edad de <strong> {edad} </strong>, y su estado civil es <strong> {civil2} </strong>
    tiene familia.
    </div>
  )
}
