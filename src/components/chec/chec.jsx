import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Loading from '../loading/Loading';
import axios from 'axios'
import './chec.css'

const useStyles = makeStyles(() => ({
  icones: {
    width: 16,
  },
  icones_marg: {
    marginRight: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
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
    height: 220,
    margin: 'auto',
  },
  titoloZize: {
    fontSize: 70
  }
}))

const Consumo = () => {

  const [busca, setBusca] = useState('')
  const [chec, setChec] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    (async () => {
      const req = await axios.get('https://my-app-ts1.herokuapp.com/')
      const res = await req.data

      setChec(res)
      setLoad(true)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {

        setBusca((chec && chec))
        setChec((chec && chec))

      } catch (error) {
        console.log({ Erro: error })
      }
    })()
  }, [chec])

  const classes = useStyles();


  useEffect(() => {
    return
  }, [])

  const handleChanher = ({ target }) => {
    if (!target.value) {
      setChec(busca)
      return
    }

    setTimeout(() => {
      const Reace1 = async () => {
        const checFilter = chec.filter(({ name }) => name.includes(target.value.toLowerCase()))
        const r = await checFilter

        setChec(r)

      }
      Reace1()
    }, 4000)
  }

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
      <h1 className="titolo2 mb-4 mt-2">Mural de alunos</h1>
      <Usuario />
      <form className="form-inline my-2 my-lg-0 container">
        <input
          className="form-control mr-sm-2 col-12"
          onChange={handleChanher}
          type="search"
          placeholder="Pesquise um nome aqui, é so digita"
          aria-label="Search"
        />
      </form>
      <div classNameName="mt-5 conatiner">
        <div className="container col-sm-11 mr">

          {chec.map(e => (

            <div key={e.id} className="div-lado ml-2">
              <div >
                <div className="box1 mt-4">

                  <div className="box1 card">
                    <h5 className={classes.title}>{e.name}</h5>
                    <img src={e.imagem} alt="imagem" className={classes.img} />

                  </div>
                </div>
              </div>
            </div>

          ))}
          {!load && <Loading />}
        </div>
        <div className="mt-5"></div>
      </div>
    </div>
  );
}

export default Consumo;
