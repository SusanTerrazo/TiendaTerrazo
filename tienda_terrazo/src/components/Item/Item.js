import './Item.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, name, img, price }) => {

    return(
        <div className='List'>
             <div className="List-Card">
                <div className='List-titulo'>{name} </div>
                <img style={{height:'75%', width:'75%'}} src={img} alt={name} />          
                <div className='List-precio'>S/{price} </div>
                <button className='List-button'>
                    <Link to={`/detail/${id}`} className='Option' >VER DETALLE</Link>
                </button>
            </div> 
            
        </div>
        
       
    )
       
}

export default Item