import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }
  

    return(    
    <div>
        <div className="Counter">
            <button className="Button" onClick={decrement}>-</button>
            <div>
                <h4 className="Numero">{quantity}</h4>
            </div> 
            <button className="Button" onClick={increment}>+</button>
        </div>
        <div>
            <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    </div>
    )

}

export default ItemCount