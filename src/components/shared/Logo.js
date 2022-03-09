import React from 'react'

export const Logo = ({ size='50px', color='#000' }) => {

    const logoStyle = {
        "fontSize": size,
        "color": color
    }

    return (
        <h2 className="logoFont" style={ logoStyle }>
            Linge Fem
        </h2>
    )
}
