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
        <div className="product">
            <div>
                <div>
                    <img className='product-img' src={productImage} alt="" />
                </div>
                <h3>Model: {modelName}</h3>
                <p>Brand: {brand}</p>
                <p>Processor: {processor}</p>
                <p>Memory: {ram}</p>
                <p>storage: {ssd}</p>
                <p>Price: {price}</p>
            </div>
            <button
                className='add-to-cart-btn'
                onClick={() => handleAddToCart(laptop)}
            >Add to cart</button><br /><br />
            {/* <button onClick={handleclick}>Problem</button>
            <p>{isClicked && 'clicked'}</p> */}

        </div>
    )
}