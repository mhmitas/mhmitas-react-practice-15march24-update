import { FaTrash } from "react-icons/fa";

function CartProduct({ cartProduct, handleDelete }) {
    const { brand, modelName, price, productImage } = cartProduct

    return (
        <tr className="">
            <td className="flex gap-2 items-center">
                <img className="w-10 h-10 rounded-md" src={productImage} alt="" />
                <div>
                    {brand} <br />{modelName}
                </div>
            </td>
            <td>${price}</td>
            <td>
                <div onClick={()=>handleDelete(cartProduct)} className="btn2">
                    <FaTrash></FaTrash>
                </div>
            </td>
        </tr>
    )
}

export default CartProduct