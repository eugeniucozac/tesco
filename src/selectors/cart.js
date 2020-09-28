// We can use "Reselect npm" for: selectTotalSavings, selectTotalWithDiscount
import { selectAllProducts } from "./products"
import { promotions } from "utils/promotions"

export const selectCartIds = state => state.cart.ids
export const selectCurrentCartProducts = state => {
  const ids = selectCartIds(state)
  const products = selectAllProducts(state)
  return ids.map(id => products.find(product => product.id === id))
}

export const selectSavings = state => {
  const products = selectCurrentCartProducts(state)
  return products
    .filter(product => product.promotion)
    .reduce((savings, saving) => {
      const price = promotions[saving.promotion.id](saving.price, selectQuantityById(state, saving.id))
      if (price === 0) {
        return savings
      }
      return [
        ...savings,
        {
          name: `${saving.name} ${saving.promotion.name}`,
          price: price,
          id: saving.id,
        },
      ]
    }, [])
}

export const selectQuantityById = (state, id) => state.cart.quantityById[id]
export const selectSubtotal = state => {
  const allProductsFromCart = selectCurrentCartProducts(state)
  return allProductsFromCart.reduce(
    (total, product) => total + product.price * selectQuantityById(state, product.id),
    0
  )
}
export const selectTotalSavings = state => {
  const savings = selectSavings(state)
  return savings.reduce((total, saving) => total + saving.price, 0)
}
export const selectTotal = state => {
  const subtotal = selectSubtotal(state)
  const totalSavings = selectTotalSavings(state)
  return subtotal - totalSavings
}
