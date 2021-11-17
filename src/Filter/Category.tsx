import { Input } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterActionCreators } from '../reducers/filterReducer'
import { ICategory } from '../types/stateTypes/filterStateTypes'
import { CategoryCard } from './Category.styles'
import { TiTick } from 'react-icons/ti'

interface Props {
  category: ICategory
}

const Category = ({ category }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleCheck = () => {
    !checked
      ? dispatch(filterActionCreators.addFilterActionCreator(category.category))
      : dispatch(
          filterActionCreators.removeFilterActionCreator(category.category)
        )

    setChecked(!checked)
  }
  return (
    <CategoryCard isChecked={checked} onClick={handleCheck}>
      <TiTick className="tick" />
      <input type="checkbox" checked={checked} value={category.category} />
      <label>{category.category}</label>
      <span>( {category.count} )</span>
    </CategoryCard>
  )
}

export default Category
