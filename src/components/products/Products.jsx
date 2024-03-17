import './product.css'
import Product from "./Product"
import { useEffect, useState } from 'react'


export default function Products({ handleAddToCart,}) {

    const [laptops, setLaptops] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [])
    // console.log(laptops)

    return (
        <div className="product-container">
            {
                laptops.map(
                    (laptop, idx) => <Product
                        key={idx}
                        laptop={laptop} handleAddToCart={handleAddToCart}
                    ></Product>
                )
            }
        </div>
    )
}