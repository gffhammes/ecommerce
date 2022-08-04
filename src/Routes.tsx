import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Checkout } from './pages/Checkout'
import Products from './pages/Products'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  )
}