import React from 'react';
import { Contacto } from '../../models/contacto.class';
import Contact from '../pure/contact';


const ContactList = () => {

    const contactExample = new Contacto('Santiago', 'Vega', 'santiago.hola@gmail.com', true)

    return (
        <div>
            <div>
            <h1> Contactos </h1>
            </div>
            <Contact contact={contactExample}></Contact>
        </div>
    );
};



export default ContactList;
