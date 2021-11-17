import styled from 'styled-components'

interface CategoryCardProps {
  isChecked: boolean
}

export const CategoryCard = styled.div<CategoryCardProps>`
  margin: 1.5rem 0.3rem;
  height: 1.4rem;
  display: inline-block;
  padding: 0.3rem 0.8rem;
  padding-left: 2rem;
  border-radius: 3rem;
  border: ${(props) =>
    props.isChecked ? 'blue 5px solid' : 'white 5px solid'};
  span {
    margin-left: 0.5rem;
    font-size: 1.1rem;
  }

  label {
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }

  input {
    display: none;
  }

  .tick {
    /* display: ${(props) => (props.isChecked ? 'inline-block' : 'none')}; */
    color: ${(props) => (props.isChecked ? 'black' : 'white')};
  }
`
