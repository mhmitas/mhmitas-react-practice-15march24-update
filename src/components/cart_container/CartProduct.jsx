function CartProduct({ cartProduct }) {
    const { brand, name, price } = cartProduct

    return (
        <div className="cart-product-cart">
            <div>
                <p>{brand} {name}</p>
            </div>
            <div>
                <p>BDT {price}</p>
            </div>
        </div>
    )
}

export default CartProduct