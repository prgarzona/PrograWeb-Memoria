import React from 'react'
import './CartaSeleccionada.css'

export default function CartaSeleccionada({ carta, handleChoice,flipped,deshabilitado }) {

    const handleClick=()=>{
        if(!deshabilitado){
            handleChoice(carta)

        }
        

    }
    return (

        <div className="carta" >
            <div className={flipped ? "flipped":""}>
                <img className="front" src={carta.src} alt="Enfrente de carta" />
                <img className="back" src="/img/HideCard.jpeg"
                    onClick={handleClick}
                    alt="Parte trasera" />
            </div>

        </div>

    )
}
