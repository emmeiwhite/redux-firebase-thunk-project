import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

import './NavbarMain.css';
import { Link } from 'react-router-dom';

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="bg-dark">
          <Navbar color="dark" className="container" dark expand="sm">
            <span className="navbar-brand">
              <Link to="/">Emmeisoft</Link>
            </span>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto">
                <SignOutLinks/>
                <SignInLinks/>
                <Link to={`/posts`} style={{textDecoration:'none',color:'#fff',marginLeft:'1rem'}}>Posts</Link>
              </Nav>
            </Collapse>
          </Navbar>
      </header>
    </div>
  );
}

export default NavbarMain;