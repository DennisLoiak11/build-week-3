<<<<<<< HEAD
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo_linkedin.png'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { FaHome } from 'react-icons/fa';
import { BsPeopleFill, BsBagDashFill, BsBellFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import Canvas from './Canvas'

const MyNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className='d-flex'>
                <div className='d-flex'>
                <img src={Logo} alt="logo" className='me-3' width={'35 px'} />
                <Form className="d-flex" role="search">
                    <InputGroup className="form-control me-2" type="search" placeholder='cerca' aria-label="Search" style={{ width: "200px", height: "37px" }}></InputGroup>
                    <button className="btn btn-outline-secondary me-5" type="submit">Cerca</button>
                </Form>
                </div>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="me-0 justify-content-around align-items-center" id="basic-navbar-nav">
                    <Nav>
                        <div className='text-center me-4'>
                        <FaHome className='align-self-center fs-3 text-secondary fs-6 nav-icon'/>
                        <p  className='nav-text pt-0' href="#home">Home</p>
                        </div>
                        
                        <div className='text-center me-4'>
                        <BsPeopleFill className='align-self-center fs-3 text-secondary nav-icon'/>
                        <p  className='nav-text pt-0' href="#link">Rete</p>
                        </div>
                        
                        <div className='text-center me-4'>
                        <BsBagDashFill className='align-self-center fs-3 text-secondary nav-icon'/>
                        <p  className='nav-text pt-0' href="#link">Lavoro</p>
                        </div>

                        <div className='text-center me-4'>
                            <RiMessage3Fill  className='align-self-center fs-3 text-secondary nav-icon'/>
                        <p  className='nav-text pt-0' href="#link">Messaggistica</p>    
                        </div>

                        <div className='text-center me-4'>
                            <BsBellFill  className='align-self-center fs-3 text-secondary nav-icon'/>
                        <p  className='nav-text pt-0' href="#link">Notifiche</p>
                        </div>

                        <NavDropdown className='me-5' title="Tu" id="basic-nav-dropdown">
                            <NavDropdown.Item className='fw-bold' href="#action/3.1">Nome Cognome</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Studente presso Epicode</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Canvas/>
                    </Nav>
                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNav;
=======
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../img/logo_linkedIn.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill, BsBagDashFill, BsBellFill } from "react-icons/bs";
import { RiMessage3Fill } from "react-icons/ri";
import Canvas from "./Canvas";

const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex">
        <div className="d-flex">
          <img src={Logo} alt="logo" className="me-3" width={"35 px"} />
          <Form className="d-flex" role="search">
            <InputGroup
              className="form-control me-2"
              type="search"
              placeholder="cerca"
              aria-label="Search"
              style={{ width: "200px", height: "37px" }}
            ></InputGroup>
            <button className="btn btn-outline-secondary me-5" type="submit">
              Cerca
            </button>
          </Form>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="me-0 justify-content-around align-items-center" id="basic-navbar-nav">
          <Nav>
            <div className="text-center me-4">
              <FaHome className="align-self-center fs-3 text-secondary fs-6 nav-icon" />
              <p className="nav-text pt-0" href="#home">
                Home
              </p>
            </div>

            <div className="text-center me-4">
              <BsPeopleFill className="align-self-center fs-3 text-secondary nav-icon" />
              <p className="nav-text pt-0" href="#link">
                Rete
              </p>
            </div>

            <div className="text-center me-4">
              <BsBagDashFill className="align-self-center fs-3 text-secondary nav-icon" />
              <p className="nav-text pt-0" href="#link">
                Lavoro
              </p>
            </div>

            <div className="text-center me-4">
              <RiMessage3Fill className="align-self-center fs-3 text-secondary nav-icon" />
              <p className="nav-text pt-0" href="#link">
                Messaggistica
              </p>
            </div>

            <div className="text-center me-4">
              <BsBellFill className="align-self-center fs-3 text-secondary nav-icon" />
              <p className="nav-text pt-0" href="#link">
                Notifiche
              </p>
            </div>

            <NavDropdown className="me-5" title="Tu" id="basic-nav-dropdown">
              <NavDropdown.Item className="fw-bold" href="#action/3.1">
                Nome Cognome
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Studente presso Epicode</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Canvas />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
>>>>>>> origin/branch-pierluigi
