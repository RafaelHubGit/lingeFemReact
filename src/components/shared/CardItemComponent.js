import React from 'react'
import { RdioBtnColorComponent } from './RdioBtnColorComponent'

export const CardItemComponent = () => {
    return (
        <div className="cardItem__container">
            <div className="cardItem__imageContainer">
                <div className="cardItem__tag">
                    <p> Nuevo </p>
                </div>
            </div>
            <div className="cardItem__dataContainer">
                <div className="cardItem__tagDiscount">
                    -25%
                </div>
                <div className="cardItem__tituloDescWrap">
                    <h5> Titulo </h5>
                    <p> conjunto coordinado encaje </p>
                </div>
                <div className="cardItem__middleWrap">
                    <div>
                        Tallas: 
                    </div>
                    <div>
                        Colores:
                        <RdioBtnColorComponent />
                    </div>
                </div>
                <div className="cardItem__bottomWrap">
rerg
                </div>
            </div>
        </div>
    )
}
