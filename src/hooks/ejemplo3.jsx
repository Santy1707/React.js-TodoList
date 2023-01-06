/**
 * Ejemplo Hooks:
 * -useState();
 * -useContext();
 */


import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Disponde de un contextoque va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)

const Componente1 = () => {
    // Inicializamos un estado vacio que va a rellenarse con los 
    // datos del padre

    const state = useContext(miContexto);

    return (
        <div>
        <h1> 
            El Token es: {state.token}
            {/* Pintamos el componente 2 */}
            <Componente2> </Componente2>
         </h1>
            
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto)

    return (
        <div>
        <h2>
            La sesión es: {state.sesion} 
        </h2>
            
        </div>
    );
}


export default function MiComponenteConContexto(){

    const estadoInicial = {
        token: '1231456654',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSession (){
        setSessionData(
            {
                token: 'JWT7878643124',
                sesion: sessionData.sesion + 100
            }
        );
    }

    return (
      <miContexto.Provider value={sessionData}>
      {/* Todo lo que esta aquí adentro puede leer los datos de sessionData*/}
      {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
      <h1> *** Ejemplo de useState() y useContext() *** </h1>
      <Componente1></Componente1>
      <button onClick={actualizarSession}> Actualizar Sesion </button>
      </miContexto.Provider>
    );
}

