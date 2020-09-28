import React from "react"
import { Col } from "react-bootstrap"
import { Layout } from "containers/Layout"
import { Cart } from "components/Cart"

export const CartPage = () => {
  return (
    <Layout>
      <Col md={12}>
        <Cart />
      </Col>
    </Layout>
  )
}
