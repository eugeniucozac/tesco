import React, { useEffect } from "react"
import { Row, Card, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts, removeProduct, decreaseQuantity, increaseQuantity } from "actions/cart"
import { selectCartIds, selectTotal, selectSavings, selectTotalSavings, selectSubtotal } from "selectors/cart"
import { Product } from "./Product"
import { Empty } from "./Empty"
import { priceWithCurrency } from "utils/helpers"
import styles from "./Cart.module.css"

export const Cart = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const productRemove = id => {
    dispatch(removeProduct(id))
  }

  const quantityDecrease = id => {
    dispatch(decreaseQuantity(id))
  }

  const quantityIncrease = id => {
    dispatch(increaseQuantity(id))
  }

  const idsFromCart = useSelector(selectCartIds)
  const subtotal = useSelector(selectSubtotal)
  const savings = useSelector(selectSavings)
  const totalSavings = useSelector(selectTotalSavings)
  const total = useSelector(selectTotal)

  return (
    <div className={styles.cart}>
      <Row>
        {idsFromCart.length ? (
          <Card.Body>
            {idsFromCart.map(id => {
              return (
                <Product
                  id={id}
                  productRemove={productRemove}
                  quantityDecrease={quantityDecrease}
                  quantityIncrease={quantityIncrease}
                />
              )
            })}
            <hr />
            <Row>
              <Col md={{ span: 3, offset: 8 }}>Subtotal</Col>
              <Col md={1} className="text-right">
                {priceWithCurrency(subtotal)}
              </Col>
            </Row>
            {savings.length ? (
              <Row>
                <Col className="mt-3" md={{ span: 4, offset: 8 }}>
                  <i>Savings</i>
                </Col>
                {savings.map(saving => {
                  return (
                    <>
                      <Col md={{ span: 3, offset: 8 }}>{saving.name}</Col>
                      <Col md={1} className="text-right">
                        {priceWithCurrency(saving.price)}
                      </Col>
                    </>
                  )
                })}
              </Row>
            ) : null}
            <Row className="mt-3">
              <Col md={{ span: 3, offset: 8 }}>
                <i>Total Savings</i>
              </Col>
              <Col md={1} className="text-right">
                {priceWithCurrency(totalSavings)}
              </Col>
            </Row>
            {total ? (
              <Row className="mt-3">
                <Col md={{ span: 3, offset: 8 }}>
                  <i>Total to pay</i>
                </Col>
                <Col md={1} className="text-right">
                  {priceWithCurrency(total)}
                </Col>
              </Row>
            ) : null}
          </Card.Body>
        ) : (
          <Empty />
        )}
      </Row>
    </div>
  )
}
