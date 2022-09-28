import { Contador } from '../ItemCount/ItemCount';


export function Greeting () {
    
    return(
        <>
        <div className="ItemListContainer">
        <p >hola</p>
        <Contador stock={10}  initial={0} onAdd={0}/>
        
        </div>
        </>
    )
}