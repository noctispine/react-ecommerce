import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './components/Header/Head'
import { MainWrapper } from './App.styles'
import { actionCreators } from './reducers/productReducer'
import ProductList from './components/ProductList/ProductList'
import CartList from './components/Cart/CartList'
import LoginForm from './components/Forms/LoginForm'
import { RootState } from './reducers/rootReducer'
import SignUpForm from './components/Forms/SignUpForm'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionCreators.fetchStart())
  })

  const userState = useSelector((state: RootState) => state.user)
  const isUserLoggedIn = userState.username !== ''
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false)
  const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false)

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
        <CartList />
      </MainWrapper>
    </>
  )
}

export default App
