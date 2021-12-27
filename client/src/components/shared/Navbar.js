import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap'; 

const MainNavbar = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
              Home
          </Navbar.Brand>
          <Navbar.Brand href="/about">
              About
          </Navbar.Brand>
          <Navbar.Brand href="/workers">
              Workers
          </Navbar.Brand>
          <Navbar.Brand href="/services">
              Services
          </Navbar.Brand>
          <Navbar.Brand href="/comments">
              Comments
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar;