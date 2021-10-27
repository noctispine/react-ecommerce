import axios from 'axios'

const productsApi = async () => {
  return await axios.get('/products')
}

export default productsApi


