import React from 'react'
import { CardItemComponent } from '../shared/CardItemComponent'
import { SlideComponent } from '../shared/slide/SlideComponent'
import { TitleLineComponent } from '../shared/TitleLineComponent'

export const InicioScreen = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                    <TitleLineComponent title='BIENVENIDA' />
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 header__slideHeight">
                    <SlideComponent />
                </div>
            </div>
            <div className="row mt-5">
                <TitleLineComponent title='RECIENTES' />
            </div>
            <div className="row mt-5">
                <CardItemComponent />
            </div>
        </div>
    )
}
