/**
 * Ejemplo
 */

import React, { Component } from 'react';

class LifecycleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de pintarlo')
    }

    componentWillReceiveProps() {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate() {
        /**
         * Sirve para controlar si el componente debe o no actualizarse
         */
        // return true | false
    }

    componentWillUpdate() {
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('DIDUPDATE: Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

LifecycleExample.propTypes = {

}

export default LifecycleExample;