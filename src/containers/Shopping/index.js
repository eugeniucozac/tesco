import React from "react"
import { Col } from "react-bootstrap"
import { Layout } from "containers/Layout"
import { Slider } from "components/Slider"
import { Products } from "components/Products"

export const ShoppingPage = () => {
  return (
    <Layout>
      <Col md={12}>
        <Slider />
      </Col>
      <Col md={12}>
        <Products />
      </Col>
    </Layout>
  )
}
