import React from 'react'
import ProductCard from '../ProductCard'
import { StyledGrid } from './styles.css';

const ProductsGrid = ({ products }) => {
  return (
    <StyledGrid>
      {products.map(product => <ProductCard {...product} />)}
    </StyledGrid>
  )
}

export default ProductsGrid
