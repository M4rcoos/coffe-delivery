import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/home'
import { OrderConfirmation } from './pages/orderConfirmed'
import { Checkout } from './pages/checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/orderConfirmed" element={<OrderConfirmation />} />
      </Route>
    </Routes>
  )
}
