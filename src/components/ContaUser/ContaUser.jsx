import React, { useState, useContext, useEffect } from 'react';
//import FormularioCadastro from '../formulario/FormUpdate';
import './cadastro.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Modal from '../modal/ModalWiel';
import { toast } from 'react-toastify';
import AppContext from '../../Context/SatateDate'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Modal, Form, Table } from 'react-bootstrap'

export default function Cadastro() {
  console.clear()

  const { users } = useContext(AppContext)

  const URL = "https://my-app-ts1.herokuapp.com/"  //"http://15.228.82.63/"

  /**
   * Esse hook useState esta recebendo o valor do evento onClick e assim
   * passo como parâmetro para o componente FormularioCadastro para que assim
   * possamos preencher os campos imput e atualizá-lo com identificação via id
   *
   */

  const [idAtual, setIdAtual] = useState('');
  const [item, setItem] = useState('');
  const [email, setEmail] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      const email2 = await localStorage.getItem("user")
      const emaiL = await JSON.parse(email2)
      setEmail(emaiL)

    })()
  }, [])

  const mail = users.filter((reqEmail) => {
    return reqEmail.email.includes(email)
  })

  //console.log(mail)

  /**
   * Essa função é responsável por apaga um usuario via id,
   * que esta vindo via evento do onClick
   */
  const Apagausuario = (id) => {
    axios
      .delete(URL + id)
      .then((res) => {
        toast.success('O usuário foi deletado com sucesso');
        localStorage.clear()
        setTimeout(() => {
          window.location.reload()
        }, 6280)
      })
      .catch((erro) => {
        toast.error(
          'Houve um erro ao tenta apaga esse usuário, erro relacionado a ' +
          erro
        );
        setTimeout(() => {
          navigate('/', window.location.reload())  //window.location.reload()
        }, 6280)
      });
  };

  const handleClose = () => setItem(false);
  const handleShow = () => setItem(true);

  return (
    <Card>
      <Card.Body className="row">
        <Table responsive="sm">
          <thead>
            <tr>
              <th scope="col">Usuario</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
              <th scope="col">
                <i className="fas fa-coins" />
              </th>
            </tr>
          </thead>

          {mail.map((r) => (
            <tbody key={r.id} className="container">
              <tr className="btn-outline-secondary text-dark">
                <th scope="row">
                  <Button variant="primary" onClick={() => setItem(r)}>
                    <i className="fas fa-eye" />
                  </Button>

                  <Modal
                    show={item}
                    onHide={() => setItem(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        {item.name}
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body className="col-6 m-auto">
                      <Card.Img src={item.imagem} className="" />
                      <Card.Text className="m-1">
                        <strong>
                          Email:{" "}
                        </strong>
                        {item.email}
                        <br />
                        <strong>
                          Phone:{" "}
                        </strong>
                        {item.phone}
                      </Card.Text>
                    </Modal.Body>
                  </Modal>
                </th>
                <td>{r.name}</td>
                <td>{r.email}</td>
                <td>{r.phone}</td>
                <td>
                  <Button variant="primary" onClick={() => setIdAtual(r)}>
                    <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                  </Button>

                  <Modal show={idAtual} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleShow}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Link to="/" onClick={() => Apagausuario(r._id)}>
                    <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}

        </Table>

      </Card.Body>
    </Card >
  );
}
