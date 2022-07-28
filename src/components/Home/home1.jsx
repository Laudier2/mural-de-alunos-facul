import React, { useState, useEffect, useContext } from 'react';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import Contexte from '../../Context/SatateDate'
import './style.css'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

import 'swiper/package.json'

const Consumo = () => {

  const { filmes } = useContext(Contexte)

  const [chec, setChec] = useState([])
  const [load, setLoad] = useState(false)
  const [ scollx, setScollx ] = useState(-400)

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        const req = await axios.get('https://my-app-ts1.herokuapp.com/')
        const res = await req.data

        setChec(res)
        setLoad(true)
      })()
    }, 1000)
  }, [])

  useEffect(() => {
    (async () => {
      try {

        setChec((chec && chec))

      } catch (error) {
        console.log({ Erro: error })
      }
    })()
  }, [chec])

  useEffect(() => {
    return
  }, [])

  //console.log(filmes)

  const img = JSON.parse(localStorage.getItem('imagem'))
  const name = JSON.parse(localStorage.getItem('name'))

  const Usuario = () => {
    if (name && img) {
      return (
        <div>
          <img src={img} alt="img" className="imgUser" />
        </div>
      )
    } else {
      return <div></div>
    }
  }

  const handleLeftArrow = () => {
    let x = scollx - Math.round(window.innerWidth / 2);
    let listw = filmes.length * 150;
    if((window.innerWidth - listw) > x) {
      x = (window.innerWidth - listw) - 60;
    }
    setScollx(x)
  }

  const handleRightArrow = () => {
    
    let x = scollx + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScollx(x)
  }

  //console.log(filmes)

  //{`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} 
  return (
    <div className="movieRow">
      <div className="movieRow--left">
        <MdNavigateBefore style={{
          fontSize: 50, 
          color: "#000", 
          background: "#FFF"           
        }} onClick={handleLeftArrow} className="imgBoder" />
      </div>
      <div className="movieRow--right">
        <MdNavigateNext style={{
          fontSize: 50, 
          color: "#000", 
          background: "#FFF" 
        }} onClick={handleRightArrow} className="imgBoder" />
      </div>
      
      <Usuario />
      
      <div className="movieRow--listarea" >
        <div className="movieRow--list" style={{
            marginLeft: scollx,
            width: filmes.length * 150
          }}>
        {filmes.length > 0 && filmes.map(e => (
          <Link to={`/details/${e.id}`}>
            <div key={e.id} className="movieRow--item">
              <div className="card-group">
                <div className="card bg-dark">
                  <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="Card image cap" />
                  <div className="card-body">
                    <strong className="card-title text-white">{e.title}</strong>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
        ))}
        </div>
        {!load && <Loading />}
      </div>   
  </div>
  );
}

export default Consumo;