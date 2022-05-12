import React from 'react';

export const Saludo = (props) => {
  console.log('==========props llegan al componente==========================');
  console.log(props.estado);
  console.log('====================================');
  

  let civil = 'soltero';
          // true
  if (props.estado === true) {
     civil = 'casado';
  }
  
  return (
    <div>Saludando a {props.name} quien tiene una 
    edad de {props.edad}, y su estado civil es {civil}
    tiene familia y el nombre de su mama {props.madre}
    </div>
  )
}
