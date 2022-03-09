import React from 'react'

export const SlideComponent = () => {
    return (
        <div id="carouselExampleIndicators" className="general__carousel carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="general__carousel-inner carousel-inner">
                <div className="carousel-item active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/el33-94306.appspot.com/o/4oU6vj1SgWXUQ-Cbb9_g?alt=media&token=d98f67fd-34c6-4b39-90f3-cf85c3de72c6" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/el33-94306.appspot.com/o/banner2.jpeg?alt=media&token=762ebc94-fc34-452b-a2d3-1a937ba0351d" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/el33-94306.appspot.com/o/U1NRuA-LSjXalFfl6Hm?alt=media&token=85719ac2-c357-4b7b-8bd5-bda3a2c54244" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
