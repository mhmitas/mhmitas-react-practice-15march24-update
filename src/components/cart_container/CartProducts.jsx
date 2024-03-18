import CartProduct from './CartProduct'
import './cart_products.css'

function CartProducts({ cartProducts }) {
    // console.log(cartProducts)

    return (
        <div className="cart-products border h-max sticky-p">
            <h3 className='align-center'>All Added Products</h3><hr />
            <div>
                {
                    cartProducts.map(
                        (cartProduct, idx) => <CartProduct
                            key={idx}
                            cartProduct={cartProduct}
                        ></CartProduct>
                    )
                }
            </div>
        </div>
    )
}

export default CartProducts