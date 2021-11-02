import React, { Dispatch, SetStateAction } from 'react'
import { Header, Navbar } from './Head.style'
import { GoPerson } from 'react-icons/go'
import { MdLogout } from 'react-icons/md'
import { RiUserAddFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { loginActionCreators } from '../../reducers/userReducer'

interface Props {
  isUserLoggedIn: boolean
  setShowLoginForm: Dispatch<SetStateAction<boolean>>
  setShowSignUpForm: Dispatch<SetStateAction<boolean>>
}

const Head = ({
  isUserLoggedIn,
  setShowLoginForm,
  setShowSignUpForm,
}: Props) => {
  const dispatch = useDispatch()

  const LoginBar = () => {
    const handleLogout = () => {
      dispatch(loginActionCreators.userLogoutCreator())
      setShowLoginForm(false)
      setShowSignUpForm(false)
    }

    if (!isUserLoggedIn) {
      return (
        <>
          <div onClick={() => setShowLoginForm(true)}>
            <GoPerson size="1.7rem" color="#DBDBFF" />
            <span>Login</span>
          </div>
          <div onClick={() => setShowSignUpForm(true)}>
            <RiUserAddFill size="1.7rem" color="#DBDBFF" />
            <span>Sign Up</span>
          </div>
        </>
      )
    } else
      return (
        <div onClick={handleLogout}>
          <MdLogout size="1.7rem" color="#DBDBFF" />
          <span>Logout</span>
        </div>
      )
  }

  return (
    <Header>
      <div>
        <h1>bring it</h1>
        <Navbar>
          <LoginBar />
        </Navbar>
      </div>
    </Header>
  )
}

export default Head
