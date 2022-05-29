 import ButtonNav from "../ButtonNav/ButtonNav"
 import CartWidget from "../CartWidget/CartWidget"
 
 const Navbar = (props) => {
    console.log(props)

    return(
        <nav>
            <h1 style ={{color: 'pink', fontSize: 50}} >{props.title}</h1>
            <div><CartWidget/></div>
            <ButtonNav label='PARA ELLAS'/>
            <ButtonNav label='PARA ELLOS'/>
            <ButtonNav label='OFERTAS'/>
            <ButtonNav label='LO MAS BUSCADO'/>
            <ButtonNav label='DE TEMPORADA'/>   
        </nav>
        
        
     )
 }
 export default Navbar


