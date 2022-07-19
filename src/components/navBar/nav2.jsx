import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {

    const Sair = () => {
       localStorage.clear()
    }

    const email = JSON.parse(localStorage.getItem("user"))

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="titolo3">
                    <a className="navbar-brand" href="/">
                        <i className="fa-solid fa-house"></i>
                    </a>
                    Mural Estudantil
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">
                                <a className="navbar-brand" href="/">
                                    <i className="fa-brands fa-youtube text-danger"></i>
                                </a>
                                Youtube
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Laudier2">
                                <a className="navbar-brand" href="/">
                                    <i className="fa-brands fa-github-alt"></i>
                                </a>
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">
                                <a className="navbar-brand" href="/">
                                    <i className="fa-brands fa-linkedin text-primary"></i>
                                </a>
                                LinkDin
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://laudierstdev.ga/">
                                <a className="navbar-brand" href="/">
                                    <i className="fa-solid fa-passport"></i>
                                </a>
                                Portifólio
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                        <div className="">
                            {email ? <NavDropdown title={email ? "Conta" : ""} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/conta">
                                <a className="navbar-brand titolo2" href="/">
                                <i className="fa-solid fa-passport"></i>
                                </a>
                                Minha Conta
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/" className="titolo2" onClick={Sair}>
                                <i class="fa-solid fa-person-running"></i>
                                Sair
                            </NavDropdown.Item>
                            </NavDropdown> : ""}
                        </div>
                    </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/form">
                            {!email ? <a className="nav-link" href="/form">Cadastre-se</a> : ""}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            {!email ? <a className="nav-link" href="/login">Login</a> : ""}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;