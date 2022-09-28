

import { useState } from "react"

export const Contador= ({stock, initial, onAdd})=>{
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
    <p>Vacantes </p>

<button variant="secondary" onClick={incrementar}>+</button>
<button variant="secondary" >{contador}</button>
<button variant="secondary" onClick={decrementar}>-</button>

<button className="Agregar" disabled={stock ===0} onClick={()=>(onAdd(contador))}>Agregar al carro</button>
</div>
    )
}
//onClick={  () =>onAdd()}