export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  quantity: number
}

interface CartState {
  products: IProduct[] | []
  total: number
}

export default CartState
