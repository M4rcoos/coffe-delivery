import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Router } from './Router'
import { CartProvider } from './context/context-cart';

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  )
}
