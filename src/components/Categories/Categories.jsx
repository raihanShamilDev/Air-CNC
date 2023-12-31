import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Container from '../Shared/Container'
import { categories } from './categoriesData'
import CategoryBox from '../Categories/CategoryBox'
const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  console.log(category);
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox label={item.label}
            icon={item.icon}
            key={item.label}
            selected={category === item.label}></CategoryBox>
        ))}
      </div>
    </Container>
  )
}

export default Categories