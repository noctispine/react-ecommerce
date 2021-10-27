import styled from 'styled-components'

export const CartListWrapper = styled.div`
  background-color: #6c757d;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  position: sticky;
  top: 0;
`
export const ItemCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  background-color: gray;
  justify-content: space-between;

  .item-wrapper {
    margin-left: 1rem;
    display: flex;
  }

  .item-content {
    margin-left: .5rem;
  }

  button {
    height: 100%;
    padding: 0 .5rem 0 .5rem;
    border: none;
    background-color: red;
    cursor: pointer;
  }
  


  img {
    width: 5rem;
    height: 5rem;
  }
`

export const CartTitle = styled.h2`
  margin: 1.5rem auto;
  width: 100%;
  text-align: center;
  ::after {
    content: '';
    display: block;
    position: relative;
    border: 1px solid black;
    width: 50%;
    left: 25%;
    margin-top: 0.7rem;
  }
`
