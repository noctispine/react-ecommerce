import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './components/Header/Head'
import { MainWrapper } from './App.styles'
import { productActionCreators } from './reducers/productReducer'
import ProductList from './components/ProductList/ProductList'
import CartList from './components/Cart/CartList'
import LoginForm from './components/Forms/LoginForm'
import { RootState } from './reducers/rootReducer'
import SignUpForm from './components/Forms/SignUpForm'
import { cartActionCreators } from './reducers/cartReducer'
import { loginActionCreators } from './reducers/userReducer'

const App = () => {
  const dispatch = useDispatch()

  // fetching products
  useEffect(() => {
    dispatch(productActionCreators.fetchStart())
  }, [])

  const userState = useSelector((state: RootState) => state.user)
  const isUserLoggedIn = userState.username !== ''
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)
  const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false)

  // fetching cart items
  useEffect(() => {
    dispatch(cartActionCreators.fetchItemsStart())
  }, [isUserLoggedIn])

  // log in if user already logged in once
  useEffect(() => {
    const token: string | null = localStorage.getItem('token')
    const username: string | null = localStorage.getItem('username')
    if (token && username)
      dispatch(loginActionCreators.userLoginSuccessCreator(username, token))
  }, [])

  const handleCloseForms = () => {
    setShowLoginForm(false)
    setShowSignUpForm(false)
  }

  return (
    <>
      <Head
        isUserLoggedIn={isUserLoggedIn}
        setShowLoginForm={setShowLoginForm}
        setShowSignUpForm={setShowSignUpForm}
      />
      {showLoginForm && !isUserLoggedIn && <LoginForm />}
      {showSignUpForm && !isUserLoggedIn && <SignUpForm />}

      <MainWrapper
        onClick={() => handleCloseForms()}
        showLoginForm={(showLoginForm || showSignUpForm) && !isUserLoggedIn}
      >
        <div>filters</div>
        <ProductList />
        <CartList setShowLoginForm={setShowLoginForm} />
      </MainWrapper>
    </>
  )
}

export default App
