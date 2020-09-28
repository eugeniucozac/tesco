import React from "react"
import { Row, Container } from "react-bootstrap"
import { Footer } from "components/Footer"
import { Header } from "components/Header"
import styles from "./Layout.module.css"

export const Layout = ({ children }) => {
  return (
    <section className={styles.pageContainer}>
      <Header />
      <Container className={styles.contentWrap}>
        <Row>{children}</Row>
      </Container>
      <Footer />
    </section>
  )
}
