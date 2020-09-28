import { GET_ALL_PRODUCTS } from "actions/actionTypes"

const initialState = {
  data: [],
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
