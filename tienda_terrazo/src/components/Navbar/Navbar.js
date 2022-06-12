 import ButtonNav from "../ButtonNav/ButtonNav"
 import CartWidget from "../CartWidget/CartWidget"
 import {Link} from 'react-router-dom'

 
 const Navbar = (props) => {
    console.log(props)

    return(
        <nav className="nav" >
            <div className="img" ><CartWidget/></div>
            <Link to='/'>
                <h1 style ={{color: 'pink', fontSize: 50}} >{props.title}</h1>
            </Link>
            
            <div className="menu">
                <Link to='/category/damas' ><ButtonNav label='DAMAS'/></Link>
                <Link to='/category/caballeros'><ButtonNav label='CABALLEROS'/></Link>
                <Link to='/category/ofertas'><ButtonNav label='OFERTAS'/></Link>
                <Link to='/category/temporada'><ButtonNav label='DE TEMPORADA'/></Link> 
            </div>
            
        </nav>
        
        
     )
 } 
 export default Navbar


