import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "actions/cart"
import { Col, Card, CardImg, Badge, Form, Button } from "react-bootstrap"
import { selectQuantityById } from "selectors/cart"
import { priceWithCurrency } from "utils/helpers"
import PropTypes from "prop-types"
import styles from "./Product.module.css"

export const Product = ({ item }) => {
  const { id, name, description, available, price, promotion } = item
  const dispatch = useDispatch()
  const quantityInCart = useSelector(state => selectQuantityById(state, id))
  const [pending, setPending] = useState(false)
  const [quantity, setQuantity] = useState(quantityInCart || 1)

  const addToCart = quantity => {
    if (/^[1-9][0-9]*$/.test(quantity)) {
      dispatch(addProduct(id, quantity))
      setPending(true)
    }
  }

  const handleChangeQuantity = event => {
    setQuantity(event.target.value)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [pending])

  const renderButtonLabel = () => {
    if (pending) {
      return "Added"
    }
    return quantityInCart ? "Update" : "Add"
  }

  return (
    <Col lg={4} md={6}>
      <Card className={styles.card}>
        <CardImg variant="top" src="http://placehold.it/700x400" />
        <Card.Body>
          <Card.Subtitle>{name}</Card.Subtitle>
          {description && <Card.Text>{description}</Card.Text>}
          <strong className={styles.price}>
            Price: {priceWithCurrency(price)} {promotion && <Badge variant="danger">{promotion.name}</Badge>}
          </strong>
          <Form>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Control
                  className="mb-2"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleChangeQuantity}
                  max={available}
                />
              </Col>
              <Col>
                <Button variant="primary" size="md" className="mb-2" block onClick={() => addToCart(quantity)}>
                  {renderButtonLabel()}
                </Button>
              </Col>
            </Form.Row>
            <section className={styles.footer}>{quantityInCart ? <p>{quantityInCart} in cart</p> : null}</section>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  )
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    available: PropTypes.bool.isRequired,
    promotion: PropTypes.object.isRequired,
  }).isRequired,
}
