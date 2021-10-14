import styled from 'styled-components'

const Header = styled.header`
  background-color: #5e4dbc;
  position: sticky;
  z-index: 20;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: #ffd300;
      margin-left: 5rem;
      font-size: 2em;
    }
  }
`

const Navbar = styled.div`
  margin-right: 10rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: #dbdbff;
  }
`

export { Header, Navbar }
