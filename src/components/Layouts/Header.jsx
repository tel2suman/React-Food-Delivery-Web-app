
 import { useState } from 'react';

import {Container, Nav, Navbar} from 'react-bootstrap';

import '../../styles/HeaderStyle.css';

import { NavLink, Outlet } from 'react-router';

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
        <Navbar.Brand>
            <img src={Logo} alt="Logo" className='img-fluid logo w-auto' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
            <NavLink to="/menu">
              Our Menu
            </NavLink>
            <NavLink to="/shop">
              Shop
            </NavLink>
            <NavLink to="/blog">
              Blog
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
            <NavLink to="/">
              <div className='cart position-relative top-0'>
                <i className="bi bi-bag fs-5"></i>
                <em className='roundpoint position-absolute top-25 rounded-circle bg-danger text-white'>2</em>
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>
      <Outlet />
    </main>
    </>
  )
}

export default Header