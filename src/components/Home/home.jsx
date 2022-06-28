import React, { useState, useEffect } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import { red } from '@material-ui/core/colors';
import Loading from '../loading/Loading';
import axios from 'axios'
import './home.css'
import { Card, NavDropdown } from 'react-bootstrap';

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

  const email = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      <h1 className="titolo2 mb-4 mt-2 h1">Mural de alunos</h1>
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

      <Card classNameName="mt-5">
        <Card.Body className="col-sm-11">

          {chec.map(e => (

            <div key={e.id} className="div-lado ml-2 box1">

              <h5 className="m-h1">{e.name}</h5>

              <Card.Img src={e.imagem} alt="imagem" className="h-100" />

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
