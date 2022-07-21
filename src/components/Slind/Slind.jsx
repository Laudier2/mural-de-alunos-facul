import React from 'react'
import './slind.css'

export default function Slind() {
    return (
        <div className="altura">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://legadodamarvel.com.br/wp-content/uploads/2022/07/Keanu-Reeves-e-Jason-Statham-entram-para-novos-filmes-da-Marvel-legadodamarvel-1024x538.webp" className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://br.web.img2.acsta.net/newsv7/20/04/02/08/05/5704147.jpg" className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://streamingsbrasil.com/wp-content/uploads/2022/07/lancamentos-netflix-agosto-2022-1130x580.jpg.webp" className="d-block w-100" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
