import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Navbars() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Brand ><h2>Expense Tracker</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}><h5>Home</h5></Link>
                        <Link to='/record' style={{ color: 'white', textDecoration: 'none' }}><h5>Records</h5></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;