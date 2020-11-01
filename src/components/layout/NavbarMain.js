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

const NavbarMain = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="bg-dark">
          <Navbar color="dark" className="container" dark expand="sm">
            <NavbarBrand href="/">Emmeisoft</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto">
                <SignOutLinks/>
                <SignInLinks/>
              </Nav>
            </Collapse>
          </Navbar>
      </header>
    </div>
  );
}

export default NavbarMain;