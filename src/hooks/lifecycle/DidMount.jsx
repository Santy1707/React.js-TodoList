/**
 * Ejemplo de uso del ciclo de vida del metodo 
 * En componente clase y el hook de ciclo de vida
 * En componente funcional 
 */


import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM | renderice')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM | renderice')
    }, [])
    

    return (
        <div>
             <h1>DidMount</h1>
        </div>
    );
}

