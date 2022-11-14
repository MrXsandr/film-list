import React, { useState } from 'react';
import {
  Button,
  Container, Form, FormControl, Navbar, NavLink, Nav, NavDropdown,
} from 'react-bootstrap';

import Registration from './Registration';

export default function Header({
  currUser, logOutHandler, currFilms, setFilms, topFilms, SearchHandler,
}) {
  const [val, setVal] = useState('');
  return (
    <Navbar className="hader" sticky="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Navbar.Brand href="/">
          Кино
        </Navbar.Brand>
        {currUser.id ? (
          <Navbar.Text>
            Привет,
            {' '}
            {currUser.name}
          </Navbar.Text>
        ) : ((<Navbar.Text>Привет, гость!</Navbar.Text>))}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="container-fluid">
          <Nav>
            <NavDropdown
              title="Меню"
              id="basic-nav-dropdown"
              className="me-2 mb-2 mb-lg-0"
            >
              {currUser.id ? (
                <NavDropdown.Item>
                  <button type="submit" onClick={logOutHandler}>Выйти</button>
                  {' '}
                </NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item href="/authorization">Личный кабинет</NavDropdown.Item>
                  <NavDropdown.Item href="/registration">Зарегестрироваться</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              // name="search"
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setVal(e.target.value)}
            />
            <Button variant="success" onClick={() => SearchHandler(val)}>Search</Button>
          </Form>
        </Navbar.Collapse>

        {/* <Button onClick={() => topFilms()}>Топ 250</Button> */}
      </Container>
    </Navbar>
  );
}
