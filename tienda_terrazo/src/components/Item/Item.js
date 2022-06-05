import './Item.css'

const Item = ({ name, img, price }) => {
    return(
        <div className='List'>
             <div className="List-Card">
                <div className='List-titulo'>{name} </div>
                <img style={{height:'75%', width:'75%'}} src={img} alt={name} />          
                <div className='List-precio'>S/{price} </div>
                <button className='List-button'>Ver Detalle</button>
            </div> 
            
        </div>
        
       
    )
       
}

export default Item