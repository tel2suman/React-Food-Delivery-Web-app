
 import { useState } from 'react';

import {Container, Nav, Navbar} from 'react-bootstrap';

import '../../styles/HeaderStyle.css';

import { Link } from 'react-router';

import Logo from '../../assets/logo/logo.png';


const Header = () => {

  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {

    const scrollValue = document.documentElement?.scrollTop;

    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener ('scroll', changeValueOnScroll);


  return (
    <>
      <Navbar expand="lg" className={`${nav == true ? 'sticky' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Link>
            <img src={Logo} alt="Logo" className='img-fluid logo w-auto' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className='active' to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Our Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              <div className='cart position-relative top-0'>
                <i class="bi bi-bag fs-5"></i>
                <em className='roundpoint position-absolute top-25 rounded-circle bg-danger text-white'>2</em>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header