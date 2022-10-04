

import { useState } from "react"

export const Contador= ({stock, initial, agregarServicio})=>{
     
     const[contador , setContador]= useState (initial) ;

     const incrementar =() =>{
        if(contador<stock){
        setContador(contador +1 )}
     }
     const decrementar = () => {
        if(contador>0){
        setContador(contador-1)}
     }


return(
    <div>
    <p>N°{contador} </p>

<button  onClick={incrementar}>+</button>

<button  onClick={decrementar}>-</button>

<button   onClick={()=>(agregarServicio(contador))} className={`btnDanger ${contador>1 ? 'activo' : 'inactivo'}`} >Agregar al carro</button>
{
    contador>1 ?
    <p>Agregue</p>
    :
    <p>Incremente</p>
}

</div>
    ) 
}
//onClick={  () =>onAdd()}
//<button className="Agregar" disabled={stock ===0} onClick={()=>(onAdd(contador))}>Agregar al carro</button>