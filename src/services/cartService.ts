export function addToCartPost(
  token: string,
  productId: number,
  quantity: number
) {
  return fetch('/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + token,
    },
    body: JSON.stringify({ productId, quantity }),
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err)
    })
}

export function removeFromCartPost(token: string, productId: number) {
  return fetch(`/cart/:${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + token,
    },
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      console.log(err)
    })
}
