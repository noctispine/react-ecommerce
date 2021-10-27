import styled from 'styled-components'

export const FormWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 2rem 2rem;
  border: 1px solid black;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  z-index: 40;

  input {
    display: block;
    border-radius: 5px;
    font-size: 16px;
    background: white;
    border: 0;
    padding: 1rem 1rem;
    margin: 1.5rem -1rem;
  }

  button {
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    width: 30%;
    border: 0;
    padding: 1rem 0;
    margin-left: -0.5rem;
    border-radius: 5px;
    background-color: red;
  }

  #error {
      color: red;
      word-spacing: 1px;
  }

  #direct-register {
      margin-top: 1rem;
      color: white;
  }
`