import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbars() {
    return (
<>

        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>

            <Navbar.Brand href="#home">
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/41gQ5nc9yEL.png'
              width="80"
              height="70"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

            <Navbar.Brand ><h2>Expense Tracker</h2></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}><h5>Home</h5></Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

export default Navbars;