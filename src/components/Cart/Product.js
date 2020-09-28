import React from "react"
import { Row, Col, Image, Button } from "react-bootstrap"
import { priceWithCurrency } from "utils/helpers"
import { selectProductById } from "selectors/products"
import { selectQuantityById } from "selectors/cart"
import styles from "./Cart.module.css"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"

export const Product = ({ id, productRemove, quantityDecrease, quantityIncrease }) => {
  const { name, description, price } = useSelector(state => selectProductById(state, id))
  const quantity = useSelector(state => selectQuantityById(state, id))

  return (
    <Row className={styles.product}>
      <Col md={2} sm={12}>
        <Image src="http://placehold.it/120x80" width="120" height="80" />
      </Col>
      <Col md={4} sm={12}>
        <h4>
          <strong>{name}</strong>
        </h4>
        <h5>
          <small>{description}</small>
        </h5>
      </Col>
      <Col md={6} sm={12} className={styles.value}>
        <Col md={5}>
          <strong className={styles.amount}>{priceWithCurrency(price)}</strong>
        </Col>
        <Col md={4}>
          <Button variant="light" onClick={() => quantityDecrease(id)}>
            -
          </Button>
          <span className={styles.quantity}>{quantity}</span>
          <Button variant="light" onClick={() => quantityIncrease(id)}>
            +
          </Button>
        </Col>
        <Col md={3} className="pr-0">
          <Button variant="danger" size="sm" onClick={() => productRemove(id)}>
            Remove
          </Button>
        </Col>
      </Col>
    </Row>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantityDecrease: PropTypes.func.isRequired,
  quantityIncrease: PropTypes.func.isRequired,
  productRemove: PropTypes.func.isRequired,
}
