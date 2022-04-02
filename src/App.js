import React, { useState } from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button  } from 'react-bootstrap';
import './App.css';
import db from './db/data.js';
import Row from './component/Row.js';
import Detail from './component/Detail';

function App() {

  let [shoes, shoes변경] = useState(db);

  return (
    <div className="App">
      
    <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Brand href="#home">Shoe shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>

   
    

    <Switch>
      <Route exact path="/">
        <Jumbotron className="background">
          <h1>20% Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className='container'>
          <div className='row'>
            {
              shoes.map((a, i) => {
                return  <Row  shoes={shoes[i]} i={i} key={i} />
              })
            }
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes ={shoes} />
      </Route>

      <Route path="/:id">
          <div>아무거나 </div>      
      </Route>
    </Switch>
    </div>
  );
}

export default App;
