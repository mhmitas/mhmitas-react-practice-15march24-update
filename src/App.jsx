import { useState } from "react"
import Header from "./components/header/Header"
import Products from "./components/products/Products"
import CartProducts from "./components/cart_container/CartProducts"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [cartProducts, setCartProducts] = useState([])
  const [total, setTotal] = useState(0)


  function handleAddToCart(laptop) {
    const updateCartProducts = [...cartProducts, laptop]
    const updateTotal = total + laptop.price

    const isExist = cartProducts.find(product => product.id === laptop.id)
    // console.log(isExist)
    if (isExist) {
      toast.info('this product already exist in the cart')
    } else {
      setCartProducts(updateCartProducts)
      setTotal(updateTotal)
    }
  }

  function handleDelete(item) {
    // console.log(item)
    const updateCartProducts = cartProducts.filter(
      product => product.id !== item.id
    )
    const updateTotal = total - item.price
    setTotal(updateTotal)
    setCartProducts(updateCartProducts)

  }

  return (
    <>
      <Header cartProducts={cartProducts}></Header>
      <ToastContainer theme="dark" />
      <div className="container-c">
        <Products handleAddToCart={handleAddToCart}></Products>
        <CartProducts handleDelete={handleDelete} total={total} cartProducts={cartProducts}></CartProducts>
      </div>
    </>
  )
}

export default App
