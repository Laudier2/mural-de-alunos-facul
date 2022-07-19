import React, { useState, useContext, useEffect } from 'react';
import './cadastro.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import AppContext from '../../Context/SatateDate'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Modal, Form, Table } from 'react-bootstrap'
import api from '../../api/api'

/*const mail2 = [
  {
    id_: 1,
    name: "Laudier",
    email: "laudier@gmail.com",
    phone: 75998239680,
    imagem: "https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000"
  }
]

console.log(mail2)*/

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
  const [email, setEmail] = useState();

  const navigate = useNavigate()

  const [values, setValues] = useState([]);
  const history = useNavigate();

  const [verpass, setVerpass] = useState(false)

  const MostraPassword = () => {
    setVerpass(prevState => !prevState)
  }

  /**
   * Aqui estamos utilizando o onChange para verifica tudo que esta sendo digitado
   * nos inputes via name, e passando todo esses valores para a variável do nosso useState
   * O values e assim podemos criar na nossa base de dados via axios como vamos ver abaixo.
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  };
  /**
   * Aqui estamos fazendo uma espesse de filtragem do produto via id via props,
   * lembra da variável que eivamos para o formulário via props a idAtual, então é ela que
   * estamos usando, porque ela traz o id de um produto
   */
  useEffect(() => {
    if (idAtual) {
      api
        .get(`/admin/${idAtual}`)
        .then((res) => {
          setValues(res.data);
        });
    }
  }, [idAtual]);
  /**
   * E aqui que fazemos a criação e editação do produto o onSubmit.
   */
  function onSubmit(ev) {
    /**
     * Esse ev.preventDefault() é para evitar que o botão faça a,
     * ação natural dele que é da refresh, e ai podemos determinar para
     * onde a pagina seja redirecionada com o useHistory do react-router-dom
     */
    ev.preventDefault();

    /**
     * Agora estamos criando uma variável method com uma condição.
     * Se a requisição for put, vai ser executada put, se não execute post
     */
    const method = idAtual ? 'put' : 'put';
    const url = idAtual
      ? `${URL}${idAtual}`
      : `${URL}`;

    /**
     * E o que for resolvido na condição de cima vai ser executado aqui.
     * Seja para criar um produto ou para atualizar
     */
    api[method](url, values)
      .then(() => {
        if (idAtual === '') {
          toast.success('Usuario Cadastrado com sucesso');
        } else {
          toast.success('O Usuario foi Atualizado com sucesso');

        }
        //Correção de eero
        history("/conta")
        setTimeout(() => {
          window.location.reload()
        }, 6250)
      })
      .catch((err) => {
        toast.error('Os campos sao obrigatorio ou usuario email ja cadastrado, tente novamente');
        //Correção
        history('/conta');
        setTimeout(() => {
          window.location.reload()
        }, 6250)

      });
  }

  useEffect(() => {
    (async () => {
      const email2 = await localStorage.getItem("user")
      const emaiL = await JSON.parse(email2)
      setEmail(emaiL)

    })()
  }, [])

  /*const mail = users.filter((reqEmail) => {
    return reqEmail.email.includes(email)
  })

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

  //fechar Mural
  const handleClose = () => setIdAtual(false);

  return (
    <Card>
      <Card.Body className="row">
        <Table responsive="sm">
          <thead>
            <tr>
              <th scope="col">
                <i className="fas fa-coins" />
              </th>
              <th scope="col">Usuario</th>
              <th scope="col">E-mail</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>

          {users.map((r) => (
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
                <td onClick={() => setIdAtual(r._id)} ><i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" /></td>
                <td onClick={() => Apagausuario(r._id)}><i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" /></td>

              </tr>
              <Modal show={idAtual} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="titolo m-auto">Sistema de Atualização de dados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                      />
                      <Form.Label>Imagem</Form.Label>
                      <Form.Control
                        type="text"
                        name="imagem"
                        placeholder="Insira uma imagem"
                        autoFocus
                        value={values.imagem}
                        onChange={onChange}
                      />
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        autoFocus
                        value={values.email}
                        onChange={onChange}
                      />
                      <Form.Label>Password</Form.Label>
                      <div onClick={MostraPassword}>
                        {verpass ? <i class="fa-solid fa-eye-slash olho"></i> :
                          <i className="fas fa-eye olho" />}
                      </div>
                      <Form.Control
                        type={verpass ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={onChange}
                      />
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        placeholder="phone"
                        autoFocus
                        value={values.phone}
                        onChange={onChange}
                      />
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Fecha
                        </Button>
                        <Button variant="primary" onClick={onSubmit}>
                          Salvar
                        </Button>
                      </Modal.Footer>
                    </Form.Group>
                  </Form>
                </Modal.Body>

              </Modal>
            </tbody>
          ))}

        </Table>

      </Card.Body>
    </Card >
  );
}
