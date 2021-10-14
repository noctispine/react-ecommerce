import React from 'react'
import { Header, Navbar } from './Head.style'
import { GoPerson } from 'react-icons/go'
interface Props {}

const Head = (props: Props) => {
  return (
    <Header>
      <div>
        <h1>getir</h1>
        <Navbar>
          <div>
            <GoPerson size='1.7rem' color='#DBDBFF' />
            <span>Login</span>
          </div>
        </Navbar>
      </div>
    </Header>
  )
}

export default Head
