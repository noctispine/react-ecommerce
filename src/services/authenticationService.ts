export function loginApi(username: string, password: string) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => {
      console.log(error)
    })
}

export function registerApi(username: string, email: string, password: string) {
  return fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error))
}
