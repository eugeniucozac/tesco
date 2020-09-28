import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  INCREASE_QUANTITY_OF_PRODUCT_TO_CART,
  DECREASE_QUANTITY_OF_PRODUCT_TO_CART,
} from "actions/actionTypes"

const initialState = {
  ids: [],
  quantityById: {},
}

const addedIds = (state = initialState.ids, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return [...new Set([...state, payload.id])]
    case REMOVE_PRODUCT_FROM_CART:
      return state.filter(id => id !== payload.id)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] ? state[payload.id] + Number(payload.quantity) : Number(payload.quantity),
      }
    case INCREASE_QUANTITY_OF_PRODUCT_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] + 1,
      }
    case DECREASE_QUANTITY_OF_PRODUCT_TO_CART:
      return {
        ...state,
        [payload.id]: state[payload.id] - 1,
      }
    case REMOVE_PRODUCT_FROM_CART:
      const newState = { ...state }
      delete newState[payload.id]
      return newState
    default:
      return state
  }
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
    case REMOVE_PRODUCT_FROM_CART:
    case INCREASE_QUANTITY_OF_PRODUCT_TO_CART:
    case DECREASE_QUANTITY_OF_PRODUCT_TO_CART:
      return {
        ids: addedIds(state.ids, action),
        quantityById: quantityById(state.quantityById, action),
      }
    default:
      return state
  }
}
