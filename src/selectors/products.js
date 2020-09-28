export const selectAllProducts = state => state.products.data
export const selectProductById = (state, id) => state.products.data.find(product => product.id === id)
