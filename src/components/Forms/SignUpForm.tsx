import { FormWrapper } from './LoginForm.styles'
import { registerActionCreators } from '../../reducers/registerationReducer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import { RegisterState } from '../../types/stateTypes/registerStateType'

interface Props {}

const SignUpForm = (props: Props) => {
  const registerState: RegisterState = useSelector(
    (state: RootState) => state.register
  )

  const dispatch = useDispatch()
  const error = registerState.error

  const handleRegistration = (e: React.SyntheticEvent) => {
    e.preventDefault()
    
    const target = e.target as typeof e.target & {
      username: { value: string }
      email: { value: string }
      password: { value: string }
    }
    
    let username = target.username.value
    let email = target.email.value
    let password = target.password.value
    

    dispatch(
      registerActionCreators.registerStartCreator(username, email, password)
    )
  }
  return (
    <FormWrapper>
      <form onSubmit={handleRegistration}>
        {error && <p id="error">{error}</p>}
        <input type="username" name="username" placeholder="username" />
        <input type="password" name="password" placeholder="password" />
        <input type="email" name="email" placeholder="email" />
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </FormWrapper>
  )
}

export default SignUpForm
