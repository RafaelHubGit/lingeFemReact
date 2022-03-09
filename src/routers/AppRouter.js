import React from 'react'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { CatalogoScreen } from '../components/catalogo/CatalogoScreen';
import { ContactoScreen } from '../components/contacto/ContactoScreen';
import { HeaderScreen } from '../components/header/HeaderScreen';
import { InicioScreen } from '../components/inicio/InicioScreen';

import { MenuComponent } from '../components/MenuComponent';


export const AppRouter = () => {

    return (
        <>

            <HeaderScreen />

            <Router>
                <MenuComponent />
                <div>

                    <Switch>
                        <Route path="/inicio">
                            <InicioScreen />
                        </Route>
                        <Route path="/catalogo">
                            <CatalogoScreen />
                        </Route>
                        <Route path="/contacto">
                            <ContactoScreen />
                        </Route>

                        <Redirect to="/inicio" />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
