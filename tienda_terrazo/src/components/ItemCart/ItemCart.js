import { useCartContext } from '../../contex/CartContext'
import './ItemCart.css'

const ItemCart = ({id, name, price, quantity}) => {

    const {removeItem} = useCartContext()

    const handleRemoveItem = (e) =>  {
        e.stopPropagation()
        removeItem(id)
    }

    return (
        <div className="CartItem">
            <div >
                <h3>{name}</h3>
            </div>
            <div>
                <p>Cantidad: {quantity}</p>
            </div>
            <div>
                <p>S/{price}</p>
            </div>
            <div>
                <p>Subtotal: S/{quantity*price} </p>
            </div>
            <button className='btn' onClick={handleRemoveItem}>ELIMINAR</button>
        </div>
    )
}

export default ItemCart