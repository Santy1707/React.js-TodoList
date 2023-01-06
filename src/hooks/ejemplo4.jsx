/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = ( props ) => {
    return (
        <div>
            <h1> *** Ejemplo de Children Props *** </h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/* props.children pintará por defecto
            aquello que se encuentre entre las etiquetas de apertura y cierre 
            de este componente desde el componente de orden superior 
            */}
            { props.children }
            {/* Si no encuentra una propiedad children, por defecto pintará lo que se 
            Encuentra entre la etiqueta de apertura y cierre del componente */}
        </div>
    );
}

export default Ejemplo4;
