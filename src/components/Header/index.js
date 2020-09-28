import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navbar variant="dark" bg="dark" expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand>
              <Link to="/"> Costco</Link>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="ml-auto">
                <Link to="/">Shopping</Link>
                <Link to="/cart">Cart</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  )
}
