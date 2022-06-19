import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



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

           
            </Container>
        </Navbar>
        </>
    );
}

export default Navbars;