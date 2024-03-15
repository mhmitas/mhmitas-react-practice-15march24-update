// import { useState } from 'react';
import { useState } from 'react';
import './product.css'

export default function Product({ laptop, handleAddToCart }) {
    const { name, brand, price, processor, ram } = laptop;

    const [isClicked, setIsClicked] = useState()

    return (
        <div className="product">
            <div>
                <h3>Brand: {brand}</h3>
                <h3>Model: {name}</h3>
                <h3>Processor: {processor}</h3>
                <h3>Ram: {ram}</h3>
                <h3>Price: {price}</h3>
            </div>
            <button
                className='add-to-cart-btn'
                onClick={() => handleAddToCart(laptop)}
            >Add to cart</button><br /><br />
            <button>Problem</button>

        </div>
    )
}