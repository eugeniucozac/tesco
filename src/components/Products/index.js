import React, { useEffect } from "react"
import { Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "actions/product"
import { selectAllProducts } from "selectors/products"
import { Product } from "components/Products/Product"

export const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <section className="mt-4">
      <Row>
        {products.map((product, i) => {
          return <Product key={i} item={product} />
        })}
      </Row>
    </section>
  )
}
