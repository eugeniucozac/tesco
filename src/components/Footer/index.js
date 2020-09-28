import React from "react"
import { Container } from "react-bootstrap"

export const Footer = () => {
  return (
    <footer className="py-4 bg-dark">
      <Container>
        <p className="m-0 text-center text-white">&copy; Copyright Costco {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}
