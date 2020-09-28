import React from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Empty = () => {
  return (
    <Col className="text-center">
      <h2>Your Cart is Empty</h2>
      <h3>
        Return to <Link to="/">Shopping page</Link> to add something
      </h3>
    </Col>
  )
}
