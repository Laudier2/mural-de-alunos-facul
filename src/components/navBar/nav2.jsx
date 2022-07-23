import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsGithub } from 'react-icons/bs'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { AiFillLinkedin } from 'react-icons/ai'
import { FcPortraitMode } from 'react-icons/fc'
import { BsGear } from 'react-icons/bs'
import { FaRunning } from 'react-icons/fa'

function BasicExample() {

    const Sair = () => {
       localStorage.clear()
    }

    const email = JSON.parse(localStorage.getItem("user"))

    return (
        <Navbar bg="white" expand="lg"  className="text-white mt-2 navbar-dark">
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

                                <TiSocialYoutubeCircular className="bg-white h5 text-danger" />
                                Youtube
                                
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/Laudier2">
                                
                                    <BsGithub className="bg-white m-1 h" />
                                
                                GitHub
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/">
                                
                                <AiFillLinkedin className="bg-white text-primary m-1 h" />
                               
                                LinkDin
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://laudierstdev.ga/">
                                
                                <FcPortraitMode className="bg-white m-1 h" />
                                
                                Portifólio
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                        <div>
                            {email ? <NavDropdown title={email ? "Conta" : ""} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/conta">
                                
                                <BsGear className="m-1 bg-white" />
                                
                                Minha Conta
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/" className="h5" onClick={Sair}>
                                <FaRunning className="m1 bg-white"/>
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