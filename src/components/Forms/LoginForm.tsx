import React, { Dispatch, SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginActionCreators } from '../../reducers/userReducer'
import UserState from '../../types/stateTypes/userStateType'
import { RootState } from '../../reducers/rootReducer'
import { FormWrapper } from './LoginForm.styles'

interface Props {}

const LoginForm = (props: Props) => {
  const dispatch = useDispatch()
  const state: UserState = useSelector((state: RootState) => state.user)
  const error = state.error

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }

    let username = target.username.value
    let password = target.password.value

    dispatch(loginActionCreators.userLoginStartCreator(username, password))
  }
  return (
    <FormWrapper>
      <form onSubmit={handleLogin}>
        {error && <p id="error">{error}</p>}
        <input type="username" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <div>
          <button>Login</button>
        </div>
      </form>
      <p id="direct-register">Don't have an account? Register here</p>
    </FormWrapper>
  )
}
export default LoginForm
