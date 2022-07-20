import React, { useState, useEffect, useContext } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { red } from '@material-ui/core/colors';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import { Card } from 'react-bootstrap';
import Contexte from '../../Context/SatateDate'

/*const useStyles = makeStyles(() => ({

  icones: {
    width: 16,
  },
  icones_marg: {
    marginRight: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'auto',
  },
  title_price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    backgroundColor: red[500],
  },
  img: {
    width: '100%',
    height: 230,
    margin: 'auto',
  },
  titoloZize: {
    fontSize: 70
  }
}))
*/

const Consumo = () => {

  const { filmes } = useContext(Contexte)

  const [chec, setChec] = useState([])
  const [load, setLoad] = useState(false)

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

  console.log(filmes)

  const img = JSON.parse(localStorage.getItem('imagem'))
  const name = JSON.parse(localStorage.getItem('name'))

  const Usuario = () => {
    if (name && img) {
      return (
        <div>
          <img src={img} alt="img" className="imgUser" />
          <strong><p className="nameUser">{name} </p></strong>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      <h1 className="titolo2 mb-4 mt-2 h1">Serie e Filmes</h1>
      <Usuario />

      <Card className="mt-5">
        <Card.Body className="col-sm-12">

          {filmes.map(e => (


            <div key={e.id} className="div-lado ml-2 box1">

              <div className="card">

                <Card.Img src={`https://image.tmdb.org/t/p/w500/${e.backdrop_path}`} alt="imagem" className="card-img-top" />

                <Card.Title>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                </div>
                </Card.Title>

              </div>

            </div>

          ))}
          
          {!load && <Loading />}
        </Card.Body>
        <div className="mt-5"></div>
      </Card>
    </div >
  );
}

export default Consumo;
