import styled from 'styled-components'

const ListWrapper = styled.div`
  margin: 5rem auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  border: 1px solid black;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    grid-row-gap: 15px ;
}
`

export { ListWrapper }
