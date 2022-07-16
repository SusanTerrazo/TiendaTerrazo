import './CartWidget.css'
import { useCartContext } from '../../contex/CartContext'

const CartWidget = () => {

    const { totalQuantity}   = useCartContext()
    
    return(
        <div className="CartWidget">
            <img src="/images/shopping-cart-icon.png" alt="cart" className="CartImg"/>
            { totalQuantity }
        </div>
    )
}

export default CartWidget