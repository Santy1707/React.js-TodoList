/**
 * Ejemplo de uso de 
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useEffect, useRef, useState } from "react";

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos, cada uno 
    // en un estado diferente
    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1( contador1 + 1)
    }

    function incrementar2() {
        setContador2( contador2 + 1)
    }

    /**
     * Trabajando useEffect 
     */

                            /********** */
    /**
     * ? Caso 1: Ejecutar siempre un snippet de código 
     * Cada vez que haya un cambio en el estado del componente se ejecuta
     * aquello que este dentro del useEffect 
     */

    // useEffect(() => {
    //     console.log('cambio en el estado del componente')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef);
    // });

                            /********** */
    /**
     * ? Caso 2: Ejecutar solo en algunos casos
     * Cuando se cambie el contador 1 se ejecuta lo que diga el useEffect
     * Si cambia el 2 no habra ejecución del useEffect
     */
    // useEffect(() => {
    //     console.log('cambio en el estado del contador 1')
    //     console.log('Mostrando referencia a elemento del DOM')
    //     console.log(miRef);
    // }, [contador1]);


                            /********** */
     /**
     * ? Caso 2: Ejecutar solo en algunos casos
     * Cuando se cambie el contador 1 se ejecuta lo que diga el useEffect
     * Cuando se cambie el contador 2 se ejecuta lo que diga el useEffect
     */
     useEffect(() => {
        console.log('cambio en el estado del contador 1 / contador 2');
        console.log('Mostrando referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1, contador2]);
    

    return (
        <div>
            <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffect() ****</h1>
            <h2> CONTADOR 1: {contador1}</h2>
            <h2> CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado 
            </h4>

            {/* Botones para cambiar los contadores  */}
            <div>
                <button onClick={incrementar1}> Incrementar contador 1 </button>
                <button onClick={incrementar2}> Incrementar contador 2 </button>
            </div>
        </div>
        </div>
    );
}

export default Ejemplo2;
