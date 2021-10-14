import cartReducer, { addToCart, initialState } from '../cartReducer'

test('should handle a product being added to empty cart', () => {
  const newProduct = {
    id: 1,
    title: 'Pen',
    price: 3,
    description: 'a pen',
    category: 'Pen',
    image: '-',
    quantity: 1,
  }

  const newState = cartReducer(initialState, addToCart(newProduct))
  expect(newState).toEqual({
    products: [newProduct],
    total: newProduct.price,
  })
})

test('should handle a product being added to cart which has same product', () => {
  const product = {
    id: 1,
    title: 'Pen',
    price: 3,
    description: 'a pen',
    category: 'Pen',
    image: '-',
    quantity: 1,
  }
  const initialState = {
    products: [product],
    total: product.price,
  }
  console.log('initial state', initialState)
  const newState = cartReducer(initialState, addToCart(product))
  expect(newState).toEqual({
    products: [{ ...product, quantity: 2 }],
    total: product.price * 2,
  })
})
