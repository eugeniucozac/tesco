import { GET_ALL_PRODUCTS } from "actions/actionTypes"
import { getProducts } from "services/products"

export const getAllProducts = () => async dispatch => {
  const data = await getProducts()
  dispatch({
    type: GET_ALL_PRODUCTS,
    payload: data,
  })
}
