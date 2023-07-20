import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Navbar.css";
import 'boxicons'

function NavbarComponent() {
  
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  if (hideNavbar){
    return <Outlet />;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid justify-content-between">
          <div className="d-flex">
            <a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="20"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
          </div>

          <ul className="navbar-nav flex-row d-none d-md-flex">
            <form className="input-group my-auto d-none d-sm-flex">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Buscar"
              />
              <span className="input-group-text border-0 d-none d-lg-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </form>
          </ul>

          <ul className="navbar-nav flex-row">
            <li className="nav-item me-3 me-lg-1">
              <Link to={"/Login"} className="nav-link">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>{" "}
                  Mi cuenta
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Navbar expand="lg" className="navbar text-white">
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="mt-0 mr-4 mb-0 ml-4">
                <Link to={"/"} className="text-decoration-none text-white">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link className="mt-0 mr-4 mb-0 ml-4">
                <Link to={"/Nosotros"} className="text-decoration-none text-white">
                  Sobre nosotros
                </Link>
              </Nav.Link>
              <Nav.Link className="mt-0 mr-4 mb-0 ml-4">
                <Link to={"/catalogo"} className="text-decoration-none text-white">
                  Catálogo de productos
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/comentarios"} className="text-decoration-none text-white">
                  Contactanos
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/login"} className="text-decoration-none text-white">
                  Ingresar
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={"/dashboard"} className="text-decoration-none text-white">
                  Dashboard
                </Link>
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <a class="link-secondary me-3" href="#">
                <box-icon type="logo" name="facebook" color="white"></box-icon>
              </a>
              <a class="link-secondary me-3" href="#">
                <box-icon type="logo" name="instagram" color="white"></box-icon>
              </a>
              <a class="link-secondary me-3" href="#">
                <box-icon type="logo" name="twitter" color="white"></box-icon>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavbarComponent;
