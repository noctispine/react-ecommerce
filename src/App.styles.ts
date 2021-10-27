import styled from 'styled-components'

interface MainWrapperProps {
  showLoginForm: boolean
}

export const MainWrapper = styled.div<MainWrapperProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 2rem;
  margin: 2rem 2rem;

  ::after {
    position: absolute;
    content: '';

    display: ${(props) => (props.showLoginForm ? 'block' : 'none')};
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    z-index: 30;
  }
`
