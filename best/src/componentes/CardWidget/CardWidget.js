//import carrito from '../src/assets/carrito.png';
import { Link } from "react-router-dom"

export const  CardWidget  =({numeroCarrito})=> {
    
    return(
        <div>
            <Link to='/Cart'>
       <button ><img className="boton" src = "https://i.pinimg.com/236x/f5/bd/cb/f5bdcb14bb2affdc58660f43281daadd.jpg"/></button>
       </Link>
       <span>{numeroCarrito}</span> 
       </div>
       )

}