import React, { Component } from 'react';
import '../App.css';
import {personajes} from './personajes'

class Main extends Component {
  render() {
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
