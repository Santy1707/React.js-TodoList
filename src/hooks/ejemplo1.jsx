/**
 * Ejemplo uso Hook useState
 * 
 * Crear componente de tipo funcion y acceder a su estado privado a traves de un hook
 * y poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    // Valor inicial para un contador
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre: 'Santiago',
        email: 'santi@gmail.com'
    }

    /**
     * Queremos que el valorInicial y personainicial sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

   /**
    * Funcion para incrementar el estado privado que contiene el contador
    */
    function incrementarContador() {
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado privado que contiene la persona
     */
    function actualizarPersona () {
        setPersona(
            {
                nombre: 'Tiger',
                email: 'Tiger@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ****</h1>
            <h2> CONTADOR: {contador}</h2>
            <h2> DATOS DE LA PERSONA: </h2>
            <h3> NOMBRE: {persona.nombre}</h3>
            <h3> Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador}> Incrementar Contador </button>
            <button onClick={actualizarPersona}> Actualizar persona </button>
        </div>
    );
}

export default Ejemplo1;
