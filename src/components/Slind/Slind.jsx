import React from 'react'
import './slind.css'

export default function Slind() {
    return (
        <div className="altura">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://mhmcdn.manualdohomemmoderno.com.br/?w=781&h=488&quality=100&clipping=crop&url=https://manualdohomemmoderno.com.br/files/2020/04/100-melhores-filmes-de-todos-os-tempos-segundo-o-imdb-100-melhores-filmes-de-todos-os-tempos-segundo-o-imdb-1.jpg" className="d-block w-100" alt="/" />
                    </div>
                    <div className="carousel-item">
                    <img src="https://mhmcdn.manualdohomemmoderno.com.br/?w=781&h=488&quality=100&clipping=crop&url=https://manualdohomemmoderno.com.br/files/2020/04/100-melhores-filmes-de-todos-os-tempos-segundo-o-imdb-100-melhores-filmes-de-todos-os-tempos-segundo-o-imdb-1.jpg" className="d-block w-100" alt="/" />
                    </div>
                    <div className="carousel-item">
                    <img src="https://biva.digital/wp-content/uploads/2020/10/Qual-o-melhor-site-para-assistir-filmes-online-gratis.jpg" className="d-block w-100" alt="/" />
                    </div>
                </div>
            </div>
        </div>
    )
}
