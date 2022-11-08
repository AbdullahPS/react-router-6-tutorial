import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductsList from './ProductsList'

export const Products = () => {
  return (
    <section>
      <Outlet />
    </section>
  )
}
export default Products
