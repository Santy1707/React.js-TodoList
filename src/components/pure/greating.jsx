import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greating extends Component {

    /**
     * 
     * @param {*} props
     * Es la INFO que le llega al Componente
     * this.state es una estado local del componente, son como las propiedad de la clase, los valor internos de la misma 
     * 
     * this puede hacer referencia a las props = this.props
     * o puede hacee referencia al estado = this.state
     * 
     * Si no le pasamos props, por default es vacio, no es nada
     * 
     */

    constructor(props){
        super(props);
        this.state = {
            age: 10
        }
    }

    render() {
        return (
            <div>
                <h1>
                    HOLA {this.props.name}
                </h1>
                <h2>
                Tu edad es de: {this.state.age}
                </h2>

                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }


    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age+1
            }
        ))
     }
}


Greating.propTypes = {
    name: PropTypes.string,
    
};


export default Greating;

