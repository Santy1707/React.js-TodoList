import React, {useState} from 'react';

/**
 * Definiendo estilos en constantes
 */

// ? Estilo usuario logeado
const loggedStyled = {
    color: 'white'
}

// ? Estilo usuario no logeado
const unloggedStyled = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    // Estado para controlar si el usuario esta o no loggeado
    const [logged, setLogged] = useState(false)

    return (
        <div style={ logged ? loggedStyled : unloggedStyled}>
        {logged? 
        <p>Hola, {props.name} </p> 
        : 
        <p>Please loggin</p>}
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged);
            }}>
                { logged ? 'Logout': 'Loggin' }
            </button>
        </div>
    );
}

export default GreetingStyled;
