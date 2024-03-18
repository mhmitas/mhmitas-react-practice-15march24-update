import CartProduct from './CartProduct'
import './cart_products.css'

function CartProducts({ cartProducts }) {
    // console.log(cartProducts)

    return (
        <div className="cart-products h-max sticky-p">
            <h3 className='align-center'>All Added Products</h3><hr />

            <table className='border-collapse table-a mx-auto my-4 '>
                <thead className=''>
                    <tr >
                        <th>Product</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartProducts.map(
                            (cartProduct, idx) => <CartProduct
                                key={idx}
                                cartProduct={cartProduct}
                            ></CartProduct>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default CartProducts