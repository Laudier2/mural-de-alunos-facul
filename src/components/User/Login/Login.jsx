import React, { useState, useContext } from 'react';
import StoreContext from '../../../Context/SatateDate'
import { Card, Button, Form } from 'react-bootstrap'

import './Login.css';
//import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  console.clear()

  const { login } = useContext(StoreContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log("submit", { email, password })

    if (password && email) {
      //console.log("submit", { email, password })
      //const email2 = JSON.parse(localStorage.getItem("user"))

      login(email, password)

      setTimeout(() => {
        navigate('/conta')  //window.location.reload()
      }, 3280)
    }

  }

  return (
    <div className="user-login card p-5 mt-5 mrg">
      {/*<p className="text-light">{String(auth)}</p>*/}
      <h1 className="user-login__title">Acessece o Sistema</h1>
      <Form autoComplete="nope" onSubmit={handleSubmit}>
        <div className="user-login__form-control">
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button h5 btb p-2 shadow-lg mb-5 bg-body rounded-3 cor-btn"
          rounded
        >
          Entrar
        </Button>
      </Form>

      <Card.Link href="/form" target="_blank">
        Ainda não tenho conta
      </Card.Link>

    </div>
  );
};

export default UserLogin;
