export const mockHttp = async data => data
export const priceWithCurrency = (price, currency = "£") => `${currency} ${price.toFixed(2)}`
