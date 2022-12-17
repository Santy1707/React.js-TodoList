import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const Contact = ({ contact }) => {
    return (
        <div>
            <h2> Nombre { contact.nombre } </h2>
            <h3> apellido { contact.apellido } </h3>
            <h4> email : { contact.email } </h4>
            <h5> 
                {contact.conected ? 'Contacto En Linea' : 'Contacto No Disponible'} 
            </h5>
        </div>
    );
};


Contact.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default Contact;
