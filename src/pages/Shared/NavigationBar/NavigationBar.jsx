import React, { useContext } from "react";
import { Button, Container,Nav, NavDropdown, Navbar  } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
const handleSingOut = () => {
  logOut()
  .then(() => {

  })
  .catch((err) => {
    console.log(err.message);
  })
}
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}

                {user ? (
                  <Button onClick={handleSingOut} variant="secondary" className="px-4 py-2">
                    Log Out
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary" className="px-4 py-2">
                      Log In
                    </Button>
                  </Link>
                )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
