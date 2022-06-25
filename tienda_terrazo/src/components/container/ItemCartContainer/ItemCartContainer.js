import { useCartContext } from "../../../contex/CartContext"
import ItemCart from "../../ItemCart/ItemCart" 
import { Link } from "react-router-dom"
import './ItemCartContainer.css'


const ItemCartContainer = () => {

    
    const {cart, clearCart, totalPago, totalQuantity } = useCartContext()
    


    if(totalQuantity === 0){
        return (
        <div>
            <h1>Usted no agrego productos</h1>
            <Link className="btn" to={'/'}>IR A COMPRAR</Link>
        </div>
        )
    }

    return(
        <>
          <h1> TU CARRITO DE COMPRAS</h1>
          <div>
            {cart.map(prod => <ItemCart key={prod.id} {...prod}/> )}
          </div>
          <div className="total"><h2>TOTAL S/{totalPago}</h2> </div>
          <button className="btn" onClick={clearCart}>LIMPIAR CARRITO</button>
          
        </>
      
    )

}

export default ItemCartContainer