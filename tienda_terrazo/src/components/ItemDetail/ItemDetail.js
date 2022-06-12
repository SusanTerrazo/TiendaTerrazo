import './ItemDetail.css'

const ItemDetail = ({id, name, price, img, description}) => {

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
                <button className='Detail-button'>AÑADIR AL CARRITO</button>
            </div>
            
            


        </div>
    )  
}

export default ItemDetail