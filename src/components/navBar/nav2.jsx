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
        <Navbar bg="white" expand="lg"  className="text-white mt-2">
            <Container>
                <Navbar.Brand href="/" className="titolo3 text-white">
                    
                    <i className="fa-solid fa-house">
                    <span className="p-2">Serie e Filmes</span>
                    </i>
                   
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className="text-white">
                            <strong>Home</strong></Nav.Link>
                        <Nav.Link href="/sobre" className="text-white">
                            <strong>Sobre</strong>
                        </Nav.Link>
                        <NavDropdown title="Mais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g">

                                <i className="fa-brands fa-youtube text-danger ml-2"></i>
                                <strong className="bg-white">
                                    Youtube
                                </strong>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Laudier2">
                                
                                    <i className="fa-brands fa-github-alt text-white ml-2"></i>
                                
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
                        <div>
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
                            {!email ? <strong className="nav-link text-white">Cadastre-se</strong> : ""}
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            {!email ? <strong className="nav-link text-white">Login</strong> : ""}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;