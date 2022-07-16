import './NavBar.css'
 import ButtonNav from "../ButtonNav/ButtonNav"
 import Logo from "../Logo/Logo"
 import {Link} from 'react-router-dom'
 import CartWidget from "../CartWidget/CartWidget"
 import  Nav  from "react-bootstrap/Nav"

 
 
 const Navbar = (props) => {
    

    return(
        <Nav variant="pills" className="menu" >
            <div className='Logo'><Logo/></div>
            <Link to='/'>
                <h1 className='titulo'>{props.title}</h1>
            </Link>
            
            <Nav.Item  >
                <Link to='/category/damas' ><ButtonNav label='DAMAS'/></Link>
                <Link to='/category/caballeros'><ButtonNav label='CABALLEROS'/></Link>
                <Link to='/category/ofertas'><ButtonNav label='OFERTAS'/></Link>
                <Link to='/category/temporada'><ButtonNav label='DE TEMPORADA'/></Link>
                
                
            </Nav.Item >
            <Link to='/cart'><CartWidget/></Link>
            
        </Nav>
        
        
     )
 } 
 export default Navbar


