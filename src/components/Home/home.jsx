import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import { Card, NavDropdown } from 'react-bootstrap';

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
    height: 220,
    margin: 'auto',
  },
  titoloZize: {
    fontSize: 70
  }
}))

const Consumo = () => {
  //console.clear()

  const [busca, setBusca] = useState('')
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
    }, 2000)
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

  const Sair = () => {
    localStorage.clear()
  }

  const email = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      <h1 className="titolo2 mb-4 mt-2">Mural de alunos</h1>
      <Usuario />

      <div className="menu">
        {email ? <NavDropdown title={email ? "Conta" : ""} id="basic-nav-dropdown">
          <NavDropdown.Item href="/conta">
            <a className="navbar-brand titolo2" href="/">
              <i className="fa-solid fa-passport"></i>
            </a>
            Minha Conta
          </NavDropdown.Item>
          <NavDropdown.Item href="/" className="titolo2">
            <i class="fa-solid fa-person-running"></i>
            Sair
          </NavDropdown.Item>
        </NavDropdown> : ""}
      </div>

      {/*<form className="form-inline mb-3">
        <input
          className="form-control col-9"
          onChange={handleChanher}
          type="search"
          placeholder="Pesquise um nome aqui, é so digita"
          aria-label="Search"
        />
  </form>*/}
      <Card classNameName="mt-5">
        <Card.Body className="col-sm-11">

          {chec.map(e => (

            <div key={e.id} className="div-lado ml-2 box1">

              <h5 className={classes.title}>{e.name}</h5>
              <Card.Img src={e.imagem} alt="imagem" className={classes.img} />

            </div>

          ))}
          {!load && <Loading />}
        </Card.Body>
        <div className="mt-5"></div>
      </Card>
    </div>
  );
}

export default Consumo;
