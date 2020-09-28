const twentyPercentDiscount = (price, qty) => {
  const discount = 0.2
  const calc = qty * price * discount
  return qty % 2 === 0 ? calc : calc - price * discount
}
const buyThreeGetOne = (price, qty) => Math.floor(qty / 4) * price
const threeForTwo = (price, qty) => Math.floor(qty / 3) * price
export const promotions = {
  a9bb737c: twentyPercentDiscount,
  a9bb75d4: buyThreeGetOne,
  a9bb76c4: threeForTwo,
}
