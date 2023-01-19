import React, { useState, useEffect } from "react";
import '../../styles/lifeCycleTarea.scss'

const LifeCycleTarea = () => {

    const user = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Santiago',
        apellidos: 'Morgan Jhonson'
    }

    const [userData, setuserData] = useState(user)

    const tick = () => {
        setuserData((userData) => {
            let edad = userData.edad + 1;
            return {
                ...userData,
                fecha: new Date(),
                edad,
            }
        })
    }

    console.log(userData.fecha.toLocaleDateString)

    useEffect( () => {
        const timerID = setInterval(
            () =>  tick(), 100
        )
        return(() => {
            clearInterval(timerID)
        })

    }, [])

    return (
        <div>
            <h2>
                Hora Actual: {userData.fecha.toLocaleTimeString()}
            </h2>
            <h3>{userData.nombre} {userData.apellidos}</h3>
            <h1>Edad: {userData.edad}</h1>
        </div>
    );
}

export default LifeCycleTarea;
