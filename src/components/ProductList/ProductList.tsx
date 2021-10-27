import React, { useState } from 'react'
import { ListWrapper } from './ProductList.style'
import Product from './Product'
import { useSelector } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import { ProductState, IProduct } from '../../types/stateTypes/productStateType'
import Pagination from './Pagination'
import PlaceholderProduct from './PlaceholderProduct'

interface Props {}

const ProductList = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageSize = 12
  const productState: ProductState = useSelector(
    (state: RootState) => state.product
  )
  const products = productState.products
  const isLoading = productState.loading

  // creating enough placeholder cards for loading
  let placeholderProducts: any = []
  for (let i = 0; i < pageSize; i++)
    placeholderProducts.push(<PlaceholderProduct />)

  return (
    <>
      <ListWrapper>
        {!isLoading &&
          products
            .slice(
              (currentPage - 1) * pageSize,
              (currentPage - 1) * pageSize + pageSize
            )
            .map((product: IProduct) => {
              const { image, title, price, id, category } = product
              return (
                <Product
                  key={id}
                  image={image}
                  title={title}
                  price={price}
                  category={category}
                  id={id}
                />
              )
            })}

        {isLoading && placeholderProducts}

        <Pagination
          totalCount={products.length}
          currentPage={currentPage}
          neighborCount={1}
          onPageChange={setCurrentPage}
          pageSize={pageSize}
        />
      </ListWrapper>
    </>
  )
}

export default ProductList
