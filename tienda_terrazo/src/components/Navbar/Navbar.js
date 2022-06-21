 import ButtonNav from "../ButtonNav/ButtonNav"
 import Logo from "../Logo/Logo"
 import {Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"

 
 const Navbar = (props) => {
    

    return(
        <nav className="nav" >
            <div className="img" ><Logo/></div>
            <Link to='/'>
                <h1 style ={{color: 'pink', fontSize: 50}} >{props.title}</h1>
            </Link>
            
            <div className="menu">
                <Link to='/category/damas' ><ButtonNav label='DAMAS'/></Link>
                <Link to='/category/caballeros'><ButtonNav label='CABALLEROS'/></Link>
                <Link to='/category/ofertas'><ButtonNav label='OFERTAS'/></Link>
                <Link to='/category/temporada'><ButtonNav label='DE TEMPORADA'/></Link>
                
                
            </div>
            <Link to='/cart'><CartWidget/></Link>
            
        </nav>
        
        
     )
 } 
 export default Navbar


