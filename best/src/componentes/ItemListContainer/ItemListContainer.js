import { Contador } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';
//import {agregar} from '../src/App';

export function Greeting () {
    
    return(
        <>
        <div className="ItemListContainer">
        <p >HI</p>
        
        <ItemList/>
        <Contador stock={10} initial={0} agregarServicio={agregar}/>

           </div>
        </>
    )
}