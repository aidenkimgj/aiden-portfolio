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

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <NavbarBrand href="/">Aiden</NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className="ml-auto d-felx justify-content-around"
              navbar
              style={{ fontWeight: 'bold' }}
            >
              <NavItem>
                <Form className="col pr-3 p-1">
                  <NavLink href="#about" className="text-decoration-none">
                    About
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col pr-3 p-1">
                  <NavLink href="#skills" className="text-decoration-none">
                    Skills
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col pr-3 p-1">
                  <NavLink href="#work" className="text-decoration-none">
                    Work
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col pr-3 p-1">
                  <NavLink
                    href="#testimonials"
                    className="text-decoration-none"
                  >
                    Testimonials
                  </NavLink>
                </Form>
              </NavItem>
              <NavItem>
                <Form className="col pr-3 p-1">
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
