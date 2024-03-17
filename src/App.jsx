import { useState } from "react"
import Header from "./components/header/Header"
import Products from "./components/products/Products"
import CartProducts from "./components/cart_container/CartProducts"

function App() {

  const [cartCount, setCartCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])



  function handleAddToCart(laptop) {
    const updateCart = cartCount + 1;
    setCartCount(updateCart)
    const updateCartProducts = [...cartProducts, laptop]
    setCartProducts(updateCartProducts)

  }

  return (
    <>
      <Header cartCount={cartCount}></Header>
      <div className="container">
        <Products handleAddToCart={handleAddToCart}></Products>
        <CartProducts cartProducts={cartProducts}></CartProducts>
      </div>
    </>
  )
}

export default App
