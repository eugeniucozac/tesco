import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_TO_CART,
  FETCH_PRODUCTS_FROM_CART,
  INCREASE_QUANTITY_OF_PRODUCT_TO_CART,
  DECREASE_QUANTITY_OF_PRODUCT_TO_CART,
  FETCH_SAVINGS_FROM_CART,
} from "actions/actionTypes"

import { selectQuantityById } from "selectors/cart"

export const addProduct = (id, quantity) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: {
      id,
      quantity,
    },
  }
}

export const updateProduct = (product, quantity) => {
  return {
    type: UPDATE_PRODUCT_TO_CART,
    payload: {
      product,
      quantity,
    },
  }
}

export const getAllProducts = () => {
  return {
    type: FETCH_PRODUCTS_FROM_CART,
  }
}

export const increaseQuantity = id => {
  return {
    type: INCREASE_QUANTITY_OF_PRODUCT_TO_CART,
    payload: { id },
  }
}

export const decreaseQuantity = id => (dispatch, getState) => {
  const quantity = selectQuantityById(getState(), id)
  if (quantity - 1 > 0) {
    dispatch({
      type: DECREASE_QUANTITY_OF_PRODUCT_TO_CART,
      payload: { id },
    })
  }
}

export const removeProduct = id => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: { id },
  }
}

export const getSavings = () => {
  return {
    type: FETCH_SAVINGS_FROM_CART,
  }
}
