import axios from 'axios'
import { AuthUser } from 'utils'

const filterMenuApi = async (payload) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/filter/sidemenus`, payload)
}
const subcategoryMenuApi = async (payload) => {
    return await axios.post(`${process.env.REACT_APP_BASE_URL}/get/subcategory/collections`, payload)
}
const productsApi = async (search, take) => {
    const product_search = `${search !== '' ? search : '?'}&customer_id=${AuthUser().id}&take=${take}`
    return await axios.get(`${process.env.REACT_APP_BASE_URL}/get/products${product_search}`)
}
export { filterMenuApi, productsApi, subcategoryMenuApi };