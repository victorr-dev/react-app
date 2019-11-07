import React, {Component} from 'react';

import MensajeEstatico from './MensajeEstatico'

export default class Peliculas extends Component{

    render(){
        return (
            <div className='pelicula'>
                <h1>Soy el componente de Peliculas</h1>
                <MensajeEstatico/>
            </div>
        )
    }

}