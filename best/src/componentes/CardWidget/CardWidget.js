//import carrito from '../src/assets/carrito.png';

export const  CardWidget  =({numeroCarrito})=> {
    
    return(
        <div>
       <button ><img className="boton" src = "https://i.pinimg.com/236x/f5/bd/cb/f5bdcb14bb2affdc58660f43281daadd.jpg"/></button>
       <span>{numeroCarrito}</span> 
       </div>
       )

}