import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import CartContext from '../../contex/CartContext'


const ItemDetail = ({id, name, price, img, description, stock}) => {

const {addItem} = useContext(CartContext)

const handleOnAdd = (quantity) => {
        addItem({id, name, price, quantity})
        
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
                { <div>
                    <ItemCount stock={stock} onAdd={handleOnAdd}/>
                </div>}
            </div> 
            
         </div>
    )  
}

export default ItemDetail