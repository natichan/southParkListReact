import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  render() {
    const personajes = [{nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
}, {nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
}, {nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
}, {nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
}];
let counter = 1;
    return (
      <div className='App-main'>
          {
            personajes.map(element => {
                return (
                  <div className='App-box'>
                    <h4 className='App'>Información</h4>
                    <p>Tarjeta n°{counter++} {element.nombre} </p>
                    <img className= 'App-picture' src={element.foto} alt=''/>
                  </div>   
                )
                })
            }
      </div>
    );
  }
}

export default Main;
