import React from 'react'

export const TitleLineComponent = ({ title='TITLE' }) => {
    return (
        <div className='general__titleLineContainer'>
            <div className='general__titleLineHr'>
                <hr />
            </div>
            <div className="general__titleLineWrap">
                <p> { title } </p>
            </div>
            <div className='general__titleLineHr'>
                <hr />
            </div>
        </div>
    )
}
