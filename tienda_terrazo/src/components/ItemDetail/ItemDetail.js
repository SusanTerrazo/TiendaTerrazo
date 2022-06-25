import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { useCartContext } from '../../contex/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../notification/Notification'



const ItemDetail = ({id, name, price, img, description, stock}) => {

const [quantityAdded, setQuantityAdded] = useState(0)

const {addItem, isInCart} = useCartContext()

const isAdded = isInCart(id)

const setNotification = useNotification()

const handleOnAdd = (quantity) => {
    setNotification('success', `Se agregaron ${quantity} ${name}` )    
    addItem({id, name, price, quantity})
        setQuantityAdded(quantity)
    }
    
    return (
        <div className="Card">         
            <img style={{height: '90%', margin: 'auto'}} src={img} alt={name}/>
            <div className="Card-Detalle">
                <h2 className='Titulo'>{name}</h2>
                <div className='card-descripcion'>
                    <div>
                        <p className='Subtitulo' >DETALLES:</p>
                        <p className='Parrafo'>{description}</p>
                    </div>
                    
                    <p className='precio'>S/ {price}</p>
                </div>
                 <div>
                    
                    { !isAdded
                        ?<ItemCount stock={stock} onAdd={handleOnAdd}/>
                        : <Link to='/cart' className='btnTerminar'>Terminar compra</Link>
                    }
                </div>
            </div> 
            
         </div>
    )  
}

export default ItemDetail