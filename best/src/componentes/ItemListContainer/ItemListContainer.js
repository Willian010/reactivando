import { Contador } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';


export function Greeting () {
    
    return(
        <>
        <div className="ItemListContainer">
        <ItemList/>
        <p >hola</p>
        <Contador stock={10}  initial={0} onAdd={0}/>
        
        
        
        </div>
        </>
    )
}