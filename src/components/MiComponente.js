import React, {Component} from 'react'

//Refactorizando la clase
class MiComponente extends Component {
    render(){

        let receta = {
            nombre:'Pizza',
            ingredientes:['Tomate', 'queso']
        }
        return (
            
            //Se debe de regresar siempre solo un nodo
            //Se puede usar React.Fragment
            //Lo recomendable es ponerlo en un div
            <div className='mi-componente'>
                <h1>{receta.nombre}</h1>
                <ul>
                    {
                        receta.ingredientes.map((ingrediente, i ) => {
                            console.log(ingrediente)
                            return (
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
            </div>

        )
    }
}

export default MiComponente