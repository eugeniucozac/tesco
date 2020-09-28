import { mockHttp } from "utils/helpers"
import data from "data/data.json"

export const getProducts = async () => mockHttp(data)
