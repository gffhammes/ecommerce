import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './components/Common/DefaultLayout'
import { Checkout } from './pages/Checkout'
import Products from './pages/Products'

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="" element={<DefaultLayout />} >
        <Route path="/" element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}