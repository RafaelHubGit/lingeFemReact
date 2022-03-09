import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuComponent = () => {
    return (
        <>
            <ul className="menuUl">

                <li className="pointer">
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/inicio"
                    >
                        INICIO
                    </NavLink>
                </li>
                <li className="pointer"> 
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/catalogo"
                    >
                        CATÁLOGO
                    </NavLink>
                </li>
                <li className="pointer">
                    <NavLink
                        className={ ({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '') }
                        to="/contacto"
                    >
                        CONTACTO
                    </NavLink>
                </li>
            </ul>
        </>
    )
}
