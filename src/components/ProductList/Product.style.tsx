import styled from 'styled-components'

export const ProductCard = styled.article`
  position: relative;
  width: 12rem;
  height: 8rem;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding: 0 1rem 3rem 1rem;
  .product-content-container {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .img-container {
    width: 60%;
    height: 60%;
    padding: 2rem 2rem 1rem 2rem;
    display: flex;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .button-div-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    .button-div {
      button {
        border: none;
        padding: 0.7rem;
        border-top-left-radius: 45%;
        border-bottom-left-radius: 45%;
        background-color: #efefef;
        cursor: pointer;
      }
    }
  }
`
export const PlaceholderLoadingCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #eaecef;
  height: 10rem;
  padding: 1%;
  width: 85%;
  background-color: white;
  box-shadow: 2px 5px 5px 1px lightgrey;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  .img-container {
    width: 70%;
    height: 50%;
    padding: 20px;
  }

  .img {
    border: 1px solid white;
    width: 100%;
    height: 100%;
    background-color: #babbbc;
  }

  .content {
    background-color: #babbbc;
    padding: 5px 30px;
    margin: 5px auto;
  }

  .container.loading .img,
  .container.loading .stripe {
    animation: hintloading 2s ease-in-out 0s infinite reverse;
  }

  @keyframes hintloading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
