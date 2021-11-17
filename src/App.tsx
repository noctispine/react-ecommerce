import { useEffect, useState } from 'react'
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
import { filterActionCreators } from './reducers/filterReducer'
import FilterSection from './Filter/FilterSection'

const App = () => {
  const dispatch = useDispatch()
  const userState = useSelector((state: RootState) => state.user)
  const filterState = useSelector((state: RootState) => state.filter)
  
  // fetching products
  useEffect(() => {
    if (filterState.activeCategories.length > 0) dispatch(filterActionCreators.fetchFilterStartCreator(filterState.activeCategories))
    else dispatch(productActionCreators.fetchStart())
  }, [filterState.activeCategories])


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
        <FilterSection />
        <ProductList />
        <CartList />
      </MainWrapper>
    </>
  )
}

export default App
