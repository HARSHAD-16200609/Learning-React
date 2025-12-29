import { FaTrash,FaPlus,FaMinus } from "react-icons/fa"

function CartItem() {
  return (
    <div className="cart-item">
        <div className="item-details">
            <h4>{CartItem.name}</h4>
            <p>{CartItem.price}</p>
            <div className="quantity-controls">
                <button onClick={()=>onUpdateQuantity(item.id,item.quantity-1)}><FaMinus /></button>
                <button onClick={()=>onUpdateQuantity(item.id,item.quantity+1)}><FaPlus /></button>
            </div>

        </div>
        <button className="remove-btn" onClick={()=>onRemove(item.id)}><FaTrash /></button>
    </div>
  )
}

export default CartItem