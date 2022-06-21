import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../contex/CartContext'

const CartWidget = () => {

    const { getCartQuantity, totalQuantity}   = useContext(CartContext)
    
    return(
        <div className="CartWidget">
            <img src="/images/shopping-cart-icon.png" alt="cart" className="CartImg"/>
            { totalQuantity }
        </div>
    )
}

export default CartWidget