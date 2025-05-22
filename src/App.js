import React from 'react';
import { Container, Navbar, Card, Row, Col, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        	{/* Navbar section  */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
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

       
        <Container className="mt-10">
          {/* Heading section */}
          <h1 className="text-center mb-5">Welcome to My React World</h1>

          {/* Cards section */}
          <Row>
            <Col md={4} className="mt-10">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mt-10">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mt-10">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default App;
