import styled from 'styled-components'

const ListWrapper = styled.div`
  grid-column: 1 / span 5;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border: 1px solid black;
  width: 90%;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-gap: 1rem 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column: 2 / span 3;
  }
`

export { ListWrapper }
