// import { useState } from 'react';
import { useState } from 'react';
import './product.css'

export default function Product({ laptop, handleAddToCart }) {
    const { modelName, brand, price, processor, ram, ssd, productImage } = laptop;

    const [isClicked, setIsClicked] = useState(false)
    const handleclick = () => {
        setIsClicked(!isClicked)
        // handleAddToCart(laptop)
    }

    return (
        <div className="product space-y-2">
            <div>
                <img className='product-img' src={productImage} alt="" />
            </div>
            <h3>Model: {modelName}</h3>
            <p>Brand: {brand}</p>
            <p>Processor: {processor}</p>
            <p>Memory: {ram}</p>
            <p>storage: {ssd}</p>
            <p>Price: {price}</p>
            <button
                className='add-to-cart-btn'
                onClick={() => handleAddToCart(laptop)}
            >Add to cart</button><br /><br />
        </div>
    )
}