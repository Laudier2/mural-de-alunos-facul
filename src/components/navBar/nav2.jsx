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
                    
                    <i className="fa-solid fa-house">
                    <span className="p-2">Serie e Filmes</span>
                    </i>
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/sobre">Sobre</Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">

                                <i className="fa-brands fa-youtube text-danger"></i>
                                
                                Youtube
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Laudier2">
                                
                                    <i className="fa-brands fa-github-alt"></i>
                                
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">
                                
                                    <i className="fa-brands fa-linkedin text-primary"></i>
                               
                                LinkDin
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://laudierstdev.ga/">
                                
                                    <i className="fa-solid fa-passport"></i>
                                
                                Portifólio
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                        <div className="">
                            {email ? <NavDropdown title={email ? "Conta" : ""} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/conta">
                                
                                <i className="fa-solid fa-passport"></i>
                                
                                Minha Conta
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/" className="titolo2" onClick={Sair}>
                                <i className="fa-solid fa-person-running"></i>
                                Sair
                            </NavDropdown.Item>
                            </NavDropdown> : ""}
                        </div>
                    </Nav>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/form">
                            {!email ? <span className="nav-link">Cadastre-se</span> : ""}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            {!email ? <span className="nav-link">Login</span> : ""}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;