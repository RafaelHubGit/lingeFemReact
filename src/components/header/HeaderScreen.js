import React from 'react'
import { Logo } from '../shared/Logo'

export const HeaderScreen = () => {
    return (
        <div className="container">
            <div className="row header__headerHeight">
                <div className="row mt-5">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 d-flex justify-content-center align-items-center">
                        <Logo size='50px' color='#474747' />
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                {/* <div className="row mt-5">
                    <MenuComponent />
                </div> */}
                
            </div>
        </div>
    )
}
