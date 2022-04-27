import React from 'react'
import './CartaSeleccionada.css'

export default function CartaSeleccionada({carta}) {
    return (

        <div className="carta" >
            <div>
                <img className="front" src={carta.src} alt="Enfrente de carta" />
                <img className="back" src="/img/HideCard.jpeg" alt="Parte trasera" />
            </div>

        </div>

    )
}
