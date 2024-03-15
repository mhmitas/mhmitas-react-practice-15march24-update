import './product.css'
import Product from "./Product"

const laptops = [
    { brand: "apple", name: 'macbook air', price: 155000, processor: 'm1', ram: '8GB' },
    { brand: "acer", name: 'aspire 3', price: 55000, processor: 'intel', ram: '8GB' },
    { brand: "hp", name: 'pavilion', price: 55000, processor: 'ryzen', ram: '4GB' },
    { brand: "asus", name: 'vivobook', price: 65000, processor: 'intel', ram: '8GB' },
    { brand: "lenovo", name: 'ideapad', price: 45000, processor: 'ryzen', ram: '8GB' },
]

export default function Products({ handleAddToCart }) {
    return (
        <div className="product-container">
            {
                laptops.map(
                    (laptop, idx) => <Product key={idx} laptop={laptop} handleAddToCart={handleAddToCart}></Product>
                )
            }
        </div>
    )
}