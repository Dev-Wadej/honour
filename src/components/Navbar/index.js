// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navvbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="top_nav">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              className="africaup"
              src="../assets/Honourable.svg"
              width="70%"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav_links">
              <Nav.Link className="Home">
                {" "}
                <Link to="/"> Home </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link to="/about"> About Us </Link>
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/news"> News </Link>{" "}
              </Nav.Link>

              <Nav.Link>
                {" "}
                <Link to="/team"> Contact Us </Link>{" "}
              </Nav.Link>
            </Nav>

            <div className="button_section">
              <a href="https://github.com/adeoladdaniel/yardtools"> </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navvbar;
