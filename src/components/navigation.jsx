import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Form,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (window.innerWidth < 1000) {
      setIsOpen(!isOpen);
    } else {
      return;
    }
  };

  return (
    <>
      <Navbar dark expand="lg" className="sticky-top">
        <Container>
          <NavbarBrand href="/">
            <img
              class="logo"
              src="favicon.png"
              style={{ width: '30px', height: '30px', marginBottom: '5px' }}
            />
            <span
              style={{
                marginLeft: '10px',
                fontWeight: 'bold',
                fontSize: '22px',
              }}
            >
              Aiden
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="d-flex"
              navbar
              style={{ fontWeight: 'bold' }}
              onClick={handleToggle}
            >
              <NavItem>
                <Form className="col p-1">
                  <NavLink href="#home" className="text-decoration-none">
                    <div id="nav__item">Home</div>
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col p-1">
                  <NavLink href="#about" className="text-decoration-none">
                    About
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col p-1">
                  <NavLink href="#skills" className="text-decoration-none">
                    Skills
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col p-1">
                  <NavLink href="#work" className="text-decoration-none">
                    Work
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col p-1">
                  <NavLink
                    href="#testimonials"
                    className="text-decoration-none"
                  >
                    Testimonials
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col p-1">
                  <NavLink href="#contact" className="text-decoration-none">
                    Contact
                  </NavLink>
                </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
